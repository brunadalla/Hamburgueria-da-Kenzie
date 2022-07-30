import { ContainerCarrinho, CartList } from "../../styles/cart"
import CartCard from "../CartCard"

const Cart = ({ currentSale, setCartTotal, removeItem, children }) => {

    const values = currentSale.map(product => product.price)
    const total  = values.reduce((acc, currentValue) => acc + currentValue, 0)

    setCartTotal(total.toFixed(2))

    return (

        <ContainerCarrinho>

            {
                currentSale.length !== 0 ?

                        <>

                            <h2 className="cart_title">Carrinho de compras</h2>

                            <CartList>

                                <ul>
                                    {
                                        currentSale.map((product, index) => <CartCard key={index} index={index-1} product={product} removeItem={removeItem}/>)
                                    }
                                </ul>

                                <div className="cart_info">

                                    <div>

                                        <p>Total</p>
                                        {children}

                                    </div>

                                    <button onClick={() => removeItem()}> Remover Todos </button>

                                </div> 

                            </CartList>

                        </>

                :
                    <>

                        <h2 className="cart_title">Carrinho de compras</h2>
                        
                        <div className="cart_empty">

                            <h2>Sua sacola está vazia</h2>
                            <p>Adicione itens</p>

                        </div>

                    </>
            }    

        </ContainerCarrinho>
    )
}

export default Cart