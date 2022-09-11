import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/productlist' element={<ProductList></ProductList>}></Route>

      </Routes>
    </div>
  );
}

export default App;
