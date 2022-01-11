import cart from '../media/cart.png'

const CartNav = ({ counter , openCart }) => {

    return(
        <div className='cart-nav-container' onClick={openCart}>
            <img alt='cart' src={cart} className='cart-image'/>
            <div className='cart-counter'>{counter}</div>
        </div>
    )
}

export default CartNav;