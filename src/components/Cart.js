import cart from '../media/cart.png'

const Cart = ({ counter }) => {

    return(
        <div className='cart-container'>
            <img alt='cart' src={cart} className='cart-image'/>
            <div className='cart-counter'>{counter}</div>
        </div>
    )
}

export default Cart;