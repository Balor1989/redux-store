import TYPE from "./types";

const initialState = {
  books: [],
  visible: false,
  loading: true,
  error: null,
  items: [],
  orderTotal: 220,
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case TYPE.REQUEST:
      return {
        ...state,
        books: [],
        loading: true,
        visible: false,
        error: null,
      };
    case TYPE.SUCCEESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        visible: true,
        error: null,
      };
    case TYPE.FAILRUE:
      return {
        ...state,
        books: [],
        loading: false,
        visible: true,
        error: action.payload,
      };
    case TYPE.BOOK_ADD:
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const newItem = {
        id: book.id,
        title: book.title,
        count: 1,
        price: book.price,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    default:
      return state;
  }
};

export default reducer;
