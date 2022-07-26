import ErrorBoundary from "./Components/ErrorBoundary";
import ErrorMessage from "./Components/ErrorMessage";
import Spinner from "./Components/Spinner";
import withStoreService from "./Service/hoc/withStoreService";

const App = ({ storeService }) => {
  console.log(storeService.getBooks());
  return (
    <>
      <ErrorBoundary />
      <ErrorMessage />
      <Spinner />
    </>
  );
};

export default withStoreService()(App);
