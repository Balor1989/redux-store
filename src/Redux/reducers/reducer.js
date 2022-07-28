import updateBookList from "./bookList";
import updareCart from "./cart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    cart: updareCart(state, action),
  };
};

export default reducer;
