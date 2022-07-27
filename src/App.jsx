import { Routes, Route } from "react-router-dom";
import CardPage from "./Views/CartPage";
import HomePage from "./Views/HomePage";

const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardPage />} />
      </Routes>
    </main>
  );
};

export default App;
