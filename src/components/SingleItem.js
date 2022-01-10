const SingleItem = ({ src }) => {

    return (
        <div className="item">
            <img alt='item' src={src} className="item-image"/>
            <div className="item-name">name</div>
        </div>
    )
}

export default SingleItem;