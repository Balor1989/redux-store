import { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../BookListItem";
import withStoreService from "../../Service/hoc/withStoreService";
import { booksLoaded } from "../../Redux/actions";
import Spinner from "../Spinner/Spinner";

class BookList extends Component {
  getData = async () => {
    const { storeService, booksLoaded } = this.props;
    const data = await storeService.getBooks();
    booksLoaded(data);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { books, loading, visible } = this.props;

    return (
      <>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch(booksLoaded(newBooks));
    },
  };
};

export default withStoreService()(
  connect(mapStateToprops, mapDispatchToProps)(BookList)
);
