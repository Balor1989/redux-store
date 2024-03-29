import TYPE from "../types";

const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      visible: false,
      loading: true,
      error: null,
    };
  }
  switch (action.type) {
    case TYPE.REQUEST:
      return {
        books: [],
        loading: true,
        visible: false,
        error: null,
      };
    case TYPE.SUCCEESS:
      return {
        books: action.payload,
        loading: false,
        visible: true,
        error: null,
      };
    case TYPE.FAILRUE:
      return {
        books: [],
        loading: false,
        visible: true,
        error: action.payload,
      };
    default:
      return state.bookList;
  }
};

export default updateBookList;
