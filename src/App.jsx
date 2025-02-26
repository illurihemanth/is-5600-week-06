// App.jsx
import Header from './components/Header';

import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

import CardList from './components/CardList'

import products from './data/full-products.json';

// App.jsx
import { Route, Routes} from 'react-router-dom';

// ...
function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
        </Routes>
      
    </div>
  );
}
