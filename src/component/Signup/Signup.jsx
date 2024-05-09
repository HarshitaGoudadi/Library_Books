import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    // Redirect to sign-in page when user sign up
    window.location.href = "/";
  };

  return (
    <div className="form-container py-3">
      <Form className="form-inputs" onSubmit={handleSubmit}>
        <h1 className="d-flex justify-content-center py-3">Sign up</h1>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
          <Col sm="12">
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter user name"
              value={formData.username}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Col sm="12">
            <Form.Control
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm="12">
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextConfirmPassword"
        >
          <Col sm="12">
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
        Already have an account?<Link to="/">Go to Sign In</Link>
      </Form>
    </div>
  );
}

export default Signup;
