import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  
  // ADD TO CART FUNCTION
  
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
  };


  // DELETE PRODUCT
  const handleDelete = async () => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setShowModal(false);

      navigate("/product");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // LOAD PRODUCT DETAILS
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

  // RENDER STATES
  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  // MAIN UI
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

          {/* --- BUTTONS ON ONE LINE --- */}
          <div className="d-flex gap-2 mt-3">

            <Link to="/product">
              <Button variant="primary">Back to Products</Button>
            </Link>

            <Link to={`/product/${product.id}/edit`}>
              <Button variant="warning">Edit Product</Button>
            </Link>

            {/* ADD TO CART BUTTON */}
            <Button variant="success" onClick={addToCart}>
              Add to Cart
            </Button>

            <Button variant="danger" onClick={() => setShowModal(true)}>
              Delete Product
            </Button>
          </div>
          {/* ---------------------------- */}
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete this product?
        </Modal.Body>

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
