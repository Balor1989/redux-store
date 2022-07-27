const initialState = {
  books: [],
  visible: false,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
        loading: false,
        visible: true,
      };
    default:
      return state;
  }
};

export default reducer;
