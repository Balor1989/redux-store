import s from "./BookListItem.module.css";

const BookListItem = ({ book, onAddedToCart }) => {
  const { img, title, author, price } = book;
  return (
    <div className={`${s.listItem} list-group-item rounded`}>
      <div className={s.bookImage}>
        <img src={img} alt="book" width={120} />
      </div>
      <div className={s.bookDetails}>
        <a href="/" className={s.title}>
          {title}
        </a>
        <p className={s.author}>{author}</p>
        <p className={s.price}>${price}</p>
        <button className="btn btn-success add-to-cart" onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
