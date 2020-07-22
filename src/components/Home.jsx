import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="Home">
      Home
      <Link to="/Login">Login</Link>
      <Link to="/register">Register</Link>

    </div>
  );
}

export default Home;