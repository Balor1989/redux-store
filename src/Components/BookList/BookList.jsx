import { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../BookListItem";
import withStoreService from "../../Service/hoc/withStoreService";
import { booksLoaded } from "../../Redux/actions";

class BookList extends Component {
  componentDidMount() {
    const { storeService } = this.props;
    const data = storeService.getBooks();
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    books: state.books,
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
