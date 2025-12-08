import axios from "axios";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function AddProduct() {
  const [product, setProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        formData
      );

      console.log(response.data);
      setProduct(response.data);
      setSubmitted(true);
      setError(null);

      // Clear form
      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        image: "",
      });
    } catch (error) {
      setError(`Error submitting form. Please try again: ${error.message}`);
      setSubmitted(false);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4">Add Product</h1>

      {/* Success message */}
      {submitted && <Alert
          variant="success" dismissible> {product.title} created successfully!</Alert>}

      {/* Error message */}
      {error && <Alert variant="danger" dismissible>{error}</Alert>}

      {/* Form */}
      <Form onSubmit={handleSubmit}>
        {/* TITLE */}
        <Form.Group className="mb-3">
          <Form.Label> Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* DESCRIPTION */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* CATEGORY */}
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* PRICE */}
        <Form.Group className="mb-3">
          <Form.Label>Price ($)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* IMAGE URL */}
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* BUTTON */}
        <div className="d-grid">
          <Button variant="primary" size="lg" type="submit">
            Add Product
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddProduct;
