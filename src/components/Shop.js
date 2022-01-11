import "../styles/shop.css";
import SingleItemShop from "./SingleItemShop";

const Shop = ({ imgs , plusCart }) => {
  return (
    <>
      <div className="shop">
        <div className="items-container">
          {imgs.map((val) => {
            return <SingleItemShop key={val.id} src={val.src} name={val.name} price={val.price} id={val.id} plusCart={plusCart}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
