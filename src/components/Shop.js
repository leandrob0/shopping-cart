import "../styles/shop.css";
import Nav from "./Navbar";
import SingleItem from "./SingleItem";

import adidas1 from "../media/adidas1.jpg";
import adidas2 from "../media/adidas2.jpg";
import adidas3 from "../media/adidas3.jpg";
import adidasoriginals1 from "../media/adidasoriginals1.jpg";
import adidasoriginalsnmd from "../media/adidasoriginalsnmd.jpg";
import converse from "../media/converse.jpg";
import converse2 from "../media/converse2.jpg";

//add name and id to the items.

const Shop = () => {
  const imgs = [
    { src: adidas1 },
    { src: adidas2 },
    { src: adidas3 },
    { src: adidasoriginals1 },
    { src: adidasoriginalsnmd },
    { src: converse },
    { src: converse2 },
  ];

  return (
    <>
      <Nav color="black" />
      <div className="shop">
        <div className="items-container">
          {imgs.map((val) => {
            return <SingleItem key={val.src} src={val.src} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
