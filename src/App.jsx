//import { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";


function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/:id/edit" element={<EditProduct />} />
            <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
