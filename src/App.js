import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login/Login';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/productlist' element={<ProductList></ProductList>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
