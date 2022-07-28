import TYPE from "./types";

const booksLoaded = (newBooks) => {
  return {
    type: TYPE.SUCCEESS,
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: TYPE.REQUEST,
  };
};

const booksError = (error) => {
  return {
    type: TYPE.FAILRUE,
    payload: error,
  };
};

const getData = (storeService, dispatch) => async () => {
  try {
    dispatch(booksRequested());
    const data = await storeService.getBooks();
    dispatch(booksLoaded(data));
  } catch (error) {
    dispatch(booksError(error));
  }
};

export { getData };
