import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Cart } from "../Cart"; 

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(Cart);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch product details
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

  // Delete product
  const handleDelete = async () => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setShowModal(false);
      navigate("/productList"); // Redirect to your product list page
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

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

          <div className="d-flex gap-2 mt-3">
            <Link to="/productList">
              <Button variant="primary">Back to Products</Button>
            </Link>

            <Link to={`/product/${product.id}/edit`}>
              <Button variant="warning">Edit Product</Button>
            </Link>

            <Button
              variant="success"
              onClick={() => {
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                });
                alert("Item added to cart!");
              }}
            >
              Add to Cart
            </Button>

            <Button variant="danger" onClick={() => setShowModal(true)}>
              Delete Product
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductDetails;
