import { CardCart } from "../../styles/cartCard"

const CartCard = ( {product, removeItem, index } ) => {

    const {id, name, category, img} = product

    return (

        <CardCart>

            <img src={img} alt={name}/>

            <div>

                <h3> {name} </h3>

                <p> {category} </p>

            </div>

            <button onClick={() => removeItem(id)}> Remover </button>

        </CardCart>

    )
}

export default CartCard