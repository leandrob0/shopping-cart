import "../styles/navbar.css";
import logo from "../media/shoe-logo.png";
import { Link } from "react-router-dom";

const Nav = ({ color }) => {

  const style = { color: color };
  
  return (
    <nav id="nav">
      <div className="logo">
        <Link to="/">
          <img alt="shoe-logo" src={logo} className="shoe-logo" />
        </Link>
      </div>
      <div className="list-container">
        <ul id="nav-list">
          <Link
            to="/"
            style={style}
            className="nav-item"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/shop"
            style={style}
            className="nav-item"
          >
            <li>Shop</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
