import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BookService from "./Service/BookService";
import { StoreProvider } from "./Service/StoreContext";
import ErrorBoundary from "./Components/ErrorBoundary";
import store from "./Redux/store";

const bookService = new BookService();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <StoreProvider value={bookService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StoreProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
