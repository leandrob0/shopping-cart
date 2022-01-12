const SingleItemCart = ({ src , name , price , amount , decrement , increment  , id}) => {
    return (
        <div className="single-item">
            <div className="img-name-container">
                <img alt="shoe" src={src} className="image-cart"/>
                <p className="black-text">{name}</p>
            </div>
            <div className="price-container">
                <p className="black-text">${price}</p>
                <div className="change-amount-item"> 
                    <button type="button" onClick={decrement} className={id}>-</button>
                    <p className="amount-items-cart">{amount}</p>
                    <button type="button" onClick={increment} className={id}>+</button>
                </div>
            </div>
        </div>
    )
}

export default SingleItemCart;