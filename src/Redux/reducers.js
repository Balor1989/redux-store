import TYPE from "./types";

const initialState = {
  books: [],
  visible: false,
  loading: true,
  error: null,
  items: [],
  orderTotal: 220,
};

const updateCartItems = (items, item, idx) => {
  if (idx === -1) {
    return [...items, item];
  }

  return [...items.slice(0, idx), item, ...items.slice(idx + 1)];
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, count = 0, title = book.title, price = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    price: price + book.price,
  };
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
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
      const book = state.books.find(({ id }) => id === bookId);
      const itemIndex = state.items.findIndex(({ id }) => id === bookId);
      const item = state.items[itemIndex];
      const newItem = updateCartItem(book, item);
      return {
        ...state,
        items: updateCartItems(state.items, newItem, itemIndex),
      };
    default:
      return state;
  }
};

export default reducer;
