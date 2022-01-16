import SingleItemCart from "./SingleItemCar";
import "../styles/cart.css";
import { Link } from "react-router-dom";

const ButtonsCart = () => {
  return (
    <div className="buttons-cart">
      <button type="button" onClick={() => console.log('Functionality not added :)')}>CHECKOUT</button>
      <Link to="/shopping-cart/shop">
        <button type="button">CONTINUE SHOPPING</button>
      </Link>
    </div>
  );
};

const Cart = ({ cart, decrement, increment }) => {
  return cart.length ? (
    <div className="visual-cart">
      <div className="cart-container">
        {cart.map((val) => {
          return (
            <SingleItemCart
              src={val.src}
              name={val.name}
              price={val.price}
              amount={val.amount}
              decrement={decrement}
              increment={increment}
              id={val.id}
              key={val.id}
            />
          );
        })}
        <ButtonsCart/>
      </div>
    </div>
  ) : (
    <div className="empty-container">
      <div className="outer">
        <div className="inner">
          <div className="text">THE CART IS EMPTY :(</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
