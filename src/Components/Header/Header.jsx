import s from "./Header.module.css";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const Header = ({ items, total }) => {
  return (
    <header className={`${s.headerContainer} container`}>
      <Link to="/" className={s.logo}>
        $BookStore
      </Link>
      <Link to="/cart" className={s.cart}>
        <IconContext.Provider value={{ className: `${s.icon}` }}>
          <MdShoppingCart />
        </IconContext.Provider>
        {items} items (${total})
      </Link>
    </header>
  );
};

export default Header;
