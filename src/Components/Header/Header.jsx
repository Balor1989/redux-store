import s from "./Header.module.css";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ items, total }) => {
  return (
    <header>
      <Link to="/">$BookStore</Link>
      <Link to="/cart">
        <MdShoppingCart />
        {items} items (${total})
      </Link>
    </header>
  );
};

export default Header;
