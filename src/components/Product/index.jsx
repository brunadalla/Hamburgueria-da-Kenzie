import { ProductCard, ProductInfo } from "../../styles/product"

const Product = ({ product, handleClick }) => {

    const {id, name, category, price, img} = product

    return (

        <ProductCard>

            <div className="container_image">

                <img src={img} alt={name} />

            </div>

            <ProductInfo>

                <h3> {name} </h3>

                <small> {category} </small>

                <span> R$ {price.toFixed(2)} </span>

                <button onClick={() => handleClick(id)}> Adicionar </button>

            </ProductInfo>
            
        </ProductCard>

    )
}

export default Product