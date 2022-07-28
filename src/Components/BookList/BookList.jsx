import { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../BookListItem";
import withStoreService from "../../Service/hoc/withStoreService";
import { getData, bookAddedToCart } from "../../Redux/actions";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="list-group">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { books, loading, visible, error, onAddedToCart } = this.props;

    return (
      <>
        {error && <ErrorMessage />}
        {loading && <Spinner />}
        {visible && <BookList books={books} onAddedToCart={onAddedToCart} />}
      </>
    );
  }
}

const mapStateToprops = ({ books, loading, visible, error }) => {
  return {
    books: books,
    loading: loading,
    visible: visible,
    error: error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { storeService } = ownProps;
  return {
    getData: getData(storeService, dispatch),
    onAddedToCart: (id) => {
      dispatch(bookAddedToCart(id));
    },
  };
};

export default withStoreService()(
  connect(mapStateToprops, mapDispatchToProps)(BookListContainer)
);
