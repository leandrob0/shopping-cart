import "../styles/homepage.css";
import { Link } from "react-router-dom";
import Nav from "./Navbar";

const Homepage = () => {

  return (
    <>
      <Nav color="white"/> 
      <div className="homepage-background">
        <Link to="/shop">
          <button type="button" className="button-catalog">
            View catalog
          </button>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
