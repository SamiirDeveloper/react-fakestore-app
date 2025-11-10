import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router';



function ProductList(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    return (
        <>
        <h1 className="mt-5">Product List</h1>

        </>
        
    ) 
}

export default ProductList;