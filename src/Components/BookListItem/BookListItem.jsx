const BookListItem = ({ book }) => {
  return (
    <>
      <img src={book.img} alt="book" width={100} />
      <span>{book.title}</span>
    </>
  );
};

export default BookListItem;
