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
          to="/"
          style={styleFont}
          className="nav-item"
          onClick={colorWhite}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/shop"
          style={styleFont}
          className="nav-item"
          onClick={colorBlack}
        >
          <li>Shop</li>
        </Link>
        <Link to="/cart" onClick={colorBlack}>
          <CartNav counter={cartCount} />
        </Link>
      </ul>
    </div>
  );
};

const Hamburguer = ({
  styleFont,
  colorWhite,
  colorBlack,
  openCart
}) => {
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
          to="/"
          style={styleFont}
          className="nav-item"
          onClick={colorWhite}
        >
          <span>Home</span>
        </Link>
        <Link
          to="/shop"
          style={styleFont}
          className="nav-item"
          onClick={colorBlack}
        >
          <span>Shop</span>
        </Link>
        <Link to="/cart" onClick={colorBlack}>
          <span>
            Cart
          </span>
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
        <Link to="/" onClick={colorWhite}>
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
