import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <Container className="my-5">
      <Card className="p-3 shadow-sm">
        <Card.Img
          className="product-image"
          variant="top"
          src={product.image}
          alt={product.title}
          style={{ maxWidth: "300px", margin: "0 auto" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="fw-bold">${product.price}</Card.Text>
          <Link to="/products">
            <Button variant="primary">Back to Products</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductDetails;
