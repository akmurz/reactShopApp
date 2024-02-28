import './App.css';
import { Bascket } from './bascket/bascket';
import Data from './data/data'
import cart from './images/cart.png'
import { Routes, Route, Link } from 'react-router-dom';
import { products } from './data/data';
import { useState } from 'react';
function App() {
   const [item, setItem] = useState([]);
   const [cartItemCount, setCartItemCount] = useState(0);
  
  const addToBasket = ( product) => {
   setItem([...item, product]);
   setCartItemCount(cartItemCount + 1);
  };
  
   const deleteFromBasket = (product) => {
   const newArr = item.filter((item) => item.id !== product.id);
   setItem(newArr);
   setCartItemCount(cartItemCount - 1);
  };

  return (
    <>
    <div className='wrapper'>
          <nav className='nav'>
            <div className='sub-nav'>
              <Link to={'/'} className='uni'>
                 <div className='unicode'>Unicode shop</div>
              </Link>
            </div>
            <Link to={'bascket'} className='basket-link'>
              <img src={cart} alt='basket' className='basket'/>
              {cartItemCount > 0 && <span className='cart'>{cartItemCount}</span>}  
            </Link>
          </nav>
      <div className='container'>
          <main className='main'>     
            <Routes>    
              <Route path='/' element={<Data products={products} addToBasket={addToBasket} item={item} deleteFromBasket={deleteFromBasket} />}/> 
              <Route path='bascket' element={<Bascket item={item} addToBasket={addToBasket} deleteFromBasket={deleteFromBasket} products={products}/>}/>
            </Routes>
          </main>
      </div>
    </div>
    </>
    )
}

export default App;

