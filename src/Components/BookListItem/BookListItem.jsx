const BookListItem = ({ book }) => {
  const { img, title, author, price } = book;
  return (
    <div className="list-group-item">
      <div className="book-image">
        <img src={img} alt="book" width={100} />
      </div>
      <div className="book-details">
        <a href="/" className="book-title">
          {title}
        </a>
        <p className="book-author">{author}</p>
        <p className="book-price">${price}</p>
        <button className="btn btn-success add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
