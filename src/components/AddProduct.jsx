import axios from "axios";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';

function AddProduct() {
    const [product, setProdct] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        descripton: '',
        category: '',
        price: '',
        image: '',

    });
    // handle changes to form input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


    // handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://fakestoreapi.com/products", FormData);
            console.log(response.data);
            setProdct(response.data);
            setSubmitted(true);
            setError(null);
        }
        catch (error) {
            setError(`Error submitting form. Please try again: ${error.message}`);
            setSubmitted(false);
        }
    }
    return (
        <>
        <h1 className="mt-5">Add Product</h1>
        </>
        
    )
}

export default AddProduct;