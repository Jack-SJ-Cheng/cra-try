
import { useReducer } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartContext, cartReducer, initialState } from './store';


function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={[state, dispatch]}>
      <Navbar></Navbar>
      <div className="container mt-4">
        <div className="row g-3">
          <div className="col-7">
            <Products></Products>
          </div>
          <div className="col-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;


