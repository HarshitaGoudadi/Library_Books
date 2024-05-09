import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import { useNavigate } from "react-router-dom";
import Profile from "../Profilepage/Profile";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored email and password from local storage
    function getAllLocalStorageData() {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        data[key] = value;
      }
      return data;
    }

    // Usage
    const allData = getAllLocalStorageData();
    const formDataObject = JSON.parse(allData.formData);

   
    // Compare entered email and password with stored values
    if (
      formData.email === formDataObject.email &&
      formData.password === formDataObject.password
    ) {
      // Redirect to  home page upon successful authentication
      navigate("/home");
    } else {
      // Display error message
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "90px",
          left: "34%",
          position: "absolute",
        }}
      >
        {" "}
        <h1>Welcome to BookBuddy!</h1>
      </div>

      <div className="form-container py-3">
        <Form className="form-inputs" onSubmit={handleSubmit}>
          <h1 className="d-flex justify-content-center py-3">Sign In</h1>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2"></Form.Label>
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
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2"></Form.Label>
            <Col sm="12">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          New User? <Link to="/signup">Go to Sign Up</Link>
        </Form>
      </div>
    </>
  );
}

export default SignIn;
