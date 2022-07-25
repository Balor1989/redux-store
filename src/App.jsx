import ErrorBoundary from "./Components/ErrorBoundary";
import ErrorMessage from "./Components/ErrorMessage";
import Spinner from "./Components/Spinner";

const App = () => {
  return (
    <>
      <ErrorBoundary />
      <ErrorMessage />
      <Spinner />
    </>
  );
};

export default App;
