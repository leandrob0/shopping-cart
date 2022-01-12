import "../styles/homepage.css";
import { Link } from "react-router-dom";

const Homepage = ({ colorBlack }) => {

  return (
    <>
      <div className="homepage-background">
        <Link to="/shopping-cart/shop" onClick={colorBlack}>
          <button type="button" className="button-catalog">
            View catalog
          </button>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
