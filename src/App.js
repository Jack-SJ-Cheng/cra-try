
import Navbar from './components/Navbar';
import Porducts from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container mt-4">
        <div className="row g-3">
          <div className="col-7">
            <Porducts></Porducts>
          </div>
          <div className="col-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
