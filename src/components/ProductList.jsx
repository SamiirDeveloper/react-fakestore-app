import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';



function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch(() => {
            setError("Failed to fetch products.");
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;


    return (
        <>
        <h1 className="mt-5">Product List</h1>
        <Container>
            <row>
                {products.map((product) => (
                    <col key={product.id} md={4} className="mb-3">
                        <card>
                           <Card.Img variant="top" src={product.image} alt={product.title}/>
                           <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                           </Card.Body>
                           <link className="custom-button" to={`/products/${product.id}`}>View Details</link>
                        </card>
                    </col>
                ))}
            </row>
        </Container>

        </>
        
    ) 
}

export default ProductList;