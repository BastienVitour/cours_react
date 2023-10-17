import { useState, useEffect } from "react"
import Product from "./Product"
import axios from "axios"
import './products.scss'

export default function Products() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        await axios.get('https://fakestoreapi.com/products')
        .then((result) => {
            console.log(result.data)
            setProducts(result.data)
        })
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (

        <div className="main-products">
            {products.map((product) => {
                return(
                    <Product product={product} />
                )
            })}
        </div>

    )

}