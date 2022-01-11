import "../styles/navbar.css";
import logo from "../media/shoe-logo.png";
import { Link } from "react-router-dom";
import CartNav from "./CartNav";

const Nav = ({ color , colorWhite , colorBlack , cartCount , openCart}) => {

  const style = { color: color };

  return (
    <nav id="nav">
      <div className="logo">
        <Link to="/" onClick={colorWhite}>
          <img alt="shoe-logo" src={logo} className="shoe-logo" />
        </Link>
      </div>
      <div className="list-container">
        <ul id="nav-list">
          <Link to="/" style={style} className="nav-item" onClick={colorWhite}>
            <li>Home</li>
          </Link>
          <Link to="/shop" style={style} className="nav-item" onClick={colorBlack}>
            <li>Shop</li>
          </Link>
          <Link to="/cart" onClick={colorBlack}>
            <CartNav counter={cartCount} openCart={openCart}/>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
