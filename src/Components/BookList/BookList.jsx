import { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../BookListItem";
import withStoreService from "../../Service/hoc/withStoreService";
import { booksLoaded, booksRequested, booksError } from "../../Redux/actions";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/";

class BookList extends Component {
  getData = async () => {
    const { storeService, booksLoaded, booksRequested, booksError } =
      this.props;
    try {
      booksRequested();
      const data = await storeService.getBooks();
      booksLoaded(data);
    } catch (error) {
      booksError(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { books, loading, visible, error } = this.props;

    return (
      <>
        {error && <ErrorMessage />}
        {loading && <Spinner />}
        {visible && (
          <ul className="list-group">
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <BookListItem book={book} />
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    visible: state.visible,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch(booksLoaded(newBooks));
    },
    booksRequested: () => {
      dispatch(booksRequested());
    },
    booksError: (error) => {
      dispatch(booksError(error));
    },
  };
};

export default withStoreService()(
  connect(mapStateToprops, mapDispatchToProps)(BookList)
);
