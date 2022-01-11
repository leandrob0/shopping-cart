const SingleItemCart = ({ src , name , price }) => {
    return (
        <div className="single-item">
            <div className="img-name-container">
                <img alt="shoe" src={src} className="image-cart"/>
                <p className="black-text">{name}</p>
            </div>
            <div className="price-container">
                <p className="black-text">${price}</p>
            </div>
        </div>
    )
}

export default SingleItemCart;