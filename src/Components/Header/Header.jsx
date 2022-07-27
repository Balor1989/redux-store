import s from "./Header.module.css";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">$BookStore</Link>
      <Link to="/cart">
        <MdShoppingCart />
      </Link>
    </header>
  );
};

export default Header;
