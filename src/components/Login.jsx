import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

function Login() {

  const [state, setState] = useState({
    email: '',
    password: ''

  })

  const handleChange = (e) => {
    const {id, value} = e.target;
    setState(prevState => {
      return {
        ...prevState,
        [id]: value
      }
    }) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='register-form-container'>
    <Form className="register-form">
    <h2 className="login-greeting">Welcome Back!</h2>
    <p>Type in your email and password to continue</p>
    <Form.Group controlId="email">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" data-ms-member="email" value={state.email} onChange={handleChange}/>
      </Form.Group>
    <Form.Group controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" data-ms-member="password" value={state.password} onChange={handleChange}/>
      </Form.Group>
    {/* sign  button */}
    <Button variant="dark" type="submit" onClick={handleSubmit}>
      Log In
    </Button>
      <h4 className="login-greeting register">Don't have an account?</h4>
      <p><Link to="/register">Please register to continue</Link></p>
    </Form>
  </div>
  );
}

export default Login;