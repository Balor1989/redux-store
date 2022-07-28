import TYPE from "../types";

const updateCartItems = (items, item, idx) => {
  if (item.count === 0) {
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...items, item];
  }

  return [...items.slice(0, idx), item, ...items.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, price = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    price: price + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    cart: { items },
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = items.findIndex(({ id }) => id === bookId);
  const item = items[itemIndex];
  const newItem = updateCartItem(book, item, quantity);
  return {
    total: 0,
    items: updateCartItems(items, newItem, itemIndex),
  };
};

const updareCart = (state, action) => {
  if (state === undefined) {
    return { items: [], orderTotal: 0 };
  }
  switch (action.type) {
    case TYPE.BOOK_ADD:
      return updateOrder(state, action.payload, 1);
    case TYPE.BOOK_REMOVE:
      return updateOrder(state, action.payload, -1);
    case TYPE.ALL_BOOK_REMOVE:
      const item = state.cart.items.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.cart;
  }
};

export default updareCart;
