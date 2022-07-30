import { List } from "../../styles/productsList"
import Product from "../Product"

const ProductList = ({ products, handleClick }) => {
    return (
        <List>
            {
                products.map((product) => <Product key={product.id} product={product} handleClick={handleClick}/>)
            }
        </List>
    )
}

export default ProductList