import SingleItemCart from "./SingleItemCar";
import "../styles/cart.css";

const Cart = ({ cart }) => {
  return cart.length ? (
    <div className="visual-cart">
      <div className="cart-container">
        {cart.map((val) => {
          return (
            <SingleItemCart
              src={val.src}
              name={val.name}
              price={val.price}
              key={val.id}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="empty-container">
      <div className="outer">
        <div className="inner">
          <div className="text">
            THE CART IS EMPTY :(
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
