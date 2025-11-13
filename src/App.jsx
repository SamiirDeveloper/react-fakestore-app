//import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';


function App() {


  return (
    <>
    
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<ProductList />}/>
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/addproduct" element={<AddProduct />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
