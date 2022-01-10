const SingleItem = ({ src , name , id , plusCart }) => {

    return (
        <div className="item">
            <img alt='item' src={src} className="item-image"/>
            <div className="bottom-container">
                <p className="item-name">{name}</p>
                <button className="add-to-cart" type="button" id={id} onClick={plusCart}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default SingleItem;