import BookList from "../../Components/BookList";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "first book",
    },
    {
      id: 2,
      title: "second book",
    },
  ];

  return <BookList books={books} />;
};

export default HomePage;
