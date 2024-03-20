import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <h2 style={{ color: "#FF8911" }}> DeepFake Detection </h2>
      <div className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="h3-styling">About</h3>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <h3 className="h3-styling">Login</h3>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <h3 className="h3-styling">Register</h3>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
