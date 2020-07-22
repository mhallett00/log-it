import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className="Register">
      <div className='register-form-container'>
      <Form className="register-form" data-ms-form="signup">
        <h2 className="register-greeting">Create An Account</h2>
        <p>Please fill in the required information to continue.</p>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />  
        </Form.Group>      
        <Button variant="dark" type="submit">
          Register
        </Button>
        <p><Link to="/login">Have an account? Sign in.</Link></p>
      </Form>
    </div>
    </div>
  );
}

export default Register;