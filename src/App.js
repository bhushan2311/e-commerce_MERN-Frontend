import React from 'react';
// import { ProductList } from './features/product-list/ProductList';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
// import ProductDetails from './features/product-list/components/ProductDetails';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Checkout from './pages/Checkout';
import {Protected} from './features/auth/components/Protected';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Protected><Home/></Protected>
  },
  {
    path:"/signup",
    element:<SignupPage/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/cart",
    element:<Protected><CartPage/></Protected> 
  },
  { 
    path: '/checkout',
    element:<Protected><Checkout></Checkout></Protected>,
  },
  {
    path:"/product-detail/:id",
    element:<Protected><ProductDetailsPage/></Protected>
  },
])

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignupPage></SignupPage> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
