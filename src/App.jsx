import { useEffect, useState }  from 'react';
import Cart                     from './components/Cart';
import ProductList              from './components/ProductsList';
import {ReactComponent as Logo} from './assets/logo.svg';

import './App.css';
import GlobalStyle from './styles/global';

function App() {

  const [products, setProducts]                 = useState([]);
  const [cartTotal, setCartTotal]               = useState(0)
  const [currentSale, setCurrentSale]           = useState([])
  const [searchInput, setSearchInput]           = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
 

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(res => res.json())
    .then(res => {
      setProducts(res)
      setFilteredProducts(res)
    })
    .catch(err => console.log(err))
    
  }, [])

  function showProducts() {
      const newProducts = products.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()) || product.category.toLowerCase().includes(searchInput.toLowerCase()))
      setFilteredProducts(newProducts)
  }

  function handleClick(productId) {
    const newProduct = filteredProducts.find(product => product.id === productId) 

    !currentSale.includes(newProduct) && setCurrentSale([...currentSale, newProduct])
  }

  function removeItem(productId) {
    const newCart = currentSale.filter(product => product.id !== productId) 

   !productId ? setCurrentSale([]) : setCurrentSale(newCart)
  }

  return (

    <div className="App">

      <GlobalStyle/>

      <header>

        <Logo/>

        <form>

          <input 
            onChange={(e) => {
              setSearchInput(e.target.value)
              showProducts()
            }} 
            type="text" 
            placeholder='Digitar pesquisa'
          />

          <button onClick={(e) => {
            e.preventDefault()
            showProducts()
          }}> 
            Pesquisar 
          </button>

        </form>

      </header>

      <main>

          {
            searchInput ?

              <>

                <div className='mainDiv'>

                  <div className='searchTitle'>

                    <h2 className='searchTitle_first'> Resultado para: </h2>
                    <h2 className='searchTitle_second'> {searchInput} </h2>

                  </div>

                  <ProductList products={filteredProducts} handleClick={handleClick}/>

                </div>

                <Cart currentSale={currentSale} setCartTotal={setCartTotal} removeItem={removeItem}>

                  <span>R$ {cartTotal}</span>

                </Cart>
                
              </>
            :
            <>
              <ProductList products={filteredProducts} handleClick={handleClick}/>

              <Cart currentSale={currentSale} setCartTotal={setCartTotal} removeItem={removeItem}>

                <span>R$ {cartTotal}</span>

              </Cart> 
            </>
          }

      </main>


    </div>

  );
}

export default App;
