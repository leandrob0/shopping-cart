import "../styles/navbar.css";
import logo from "../media/shoe-logo.png";
import { Link } from "react-router-dom";
import CartNav from "./CartNav";
import useWindowDimensions from "../hooks/useWindowDimensions";

const List = ({ styleFont, colorWhite, colorBlack, cartCount }) => {
  return (
    <div className="list-container">
      <ul id="nav-list">
        <Link
          to="/shopping-cart/"
          style={styleFont}
          className="nav-item"
          onClick={colorWhite}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/shopping-cart/shop"
          style={styleFont}
          className="nav-item"
          onClick={colorBlack}
        >
          <li>Shop</li>
        </Link>
        <Link to="/shopping-cart/cart" onClick={colorBlack}>
          <CartNav counter={cartCount} />
        </Link>
      </ul>
    </div>
  );
};

const Hamburguer = ({ styleFont, colorWhite, colorBlack }) => {
  const setDisplay = () => {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display === "none"
      ? (dropdown.style.display = "block")
      : (dropdown.style.display = "none");
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={setDisplay} type="button">
        Menu
      </button>
      <div className="dropdown-content">
        <Link
          to="/shopping-cart/"
          style={styleFont}
          className="nav-item"
          onClick={colorWhite}
        >
          <span onClick={setDisplay}>Home</span>
        </Link>
        <Link
          to="/shopping-cart/shop"
          style={styleFont}
          className="nav-item"
          onClick={colorBlack}
        >
          <span onClick={setDisplay}>Shop</span>
        </Link>
        <Link to="/shopping-cart/cart" onClick={colorBlack}>
          <span onClick={setDisplay}>Cart</span>
        </Link>
      </div>
    </div>
  );
};

const Nav = ({ color, colorWhite, colorBlack, cartCount }) => {
  const { width } = useWindowDimensions();

  const styleFont = { color: color };
  const styleNav = {
    backgroundColor: color === "white" ? "transparent" : "white",
  };

  return (
    <nav id="nav" style={styleNav}>
      <div className="logo">
        <Link to="/shopping-cart/" onClick={colorWhite}>
          <img alt="shoe-logo" src={logo} className="shoe-logo" />
        </Link>
      </div>
      {width > 650 ? (
        <List
          styleFont={styleFont}
          colorWhite={colorWhite}
          colorBlack={colorBlack}
          cartCount={cartCount}
        />
      ) : (
        <Hamburguer
          styleFont={styleFont}
          colorWhite={colorWhite}
          colorBlack={colorBlack}
        />
      )}
    </nav>
  );
};

export default Nav;
