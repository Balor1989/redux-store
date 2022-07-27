import { Routes, Route } from "react-router-dom";
import CartPage from "./Views/CartPage";
import HomePage from "./Views/HomePage";
import s from "./App.module.css";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header items={3} total={50} />
      <main className={`${s.mainContainer} container`}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
