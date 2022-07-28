const initialState = {
  books: [],
  visible: false,
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_REQUESTED":
      return {
        books: [],
        loading: true,
        visible: false,
        error: null,
      };
    case "BOOKS_LOADED":
      return {
        books: action.payload,
        loading: false,
        visible: true,
        error: null,
      };
    case "BOOKS_ERROR":
      return {
        books: [],
        loading: false,
        visible: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
