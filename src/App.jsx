import { Routes, Route } from "react-router-dom";
import CardPage from "./Views/CardPage";
import HomePage from "./Views/HomePage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/cards" element={<CardPage />} />
    </Routes>
  );
};

export default App;
