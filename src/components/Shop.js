import "../styles/shop.css";
import SingleItem from "./SingleItem";

const Shop = ({ imgs , plusCart }) => {
  return (
    <>
      <div className="shop">
        <div className="items-container">
          {imgs.map((val) => {
            return <SingleItem key={val.id} src={val.src} name={val.name} id={val.id} plusCart={plusCart}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
