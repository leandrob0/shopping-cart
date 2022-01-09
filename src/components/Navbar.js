import '../styles/navbar.css'
import logo from '../media/shoe-logo.png'

const Nav = () => {
  return (
    <nav id="nav">
      <div className="logo">
          <img alt="shoe-logo" src={logo} className="shoe-logo"/>
      </div>
      <div className="list-container">
        <ul className="list">
          <li>Home</li>
          <li>Shop</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
