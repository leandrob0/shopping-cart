import SingleItemCart from "./SingleItemCar";
import '../styles/cart.css'

const Cart = ({ cart }) => {
  return (
    <div className="visual-cart">
        <div className="cart-container">
            {
                cart.map(val => {
                    return <SingleItemCart key={val.id} src={val.src} name={val.name} price={val.price}/>
                })
            }
        </div>
    </div>
  );
};

export default Cart;
