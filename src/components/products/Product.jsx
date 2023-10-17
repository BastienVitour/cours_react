export default function Product({ product }) {

    return (
        <div className="single-product">
            <img src={product.image} alt="Product Image" width="200px" />
            <div className="textual-info">
                <p className="product-name">{product.title}</p>
                <p className="product-price">{product.price}€</p>
            </div>
        </div>
    )

}