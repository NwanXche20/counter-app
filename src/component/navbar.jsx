import React, { Component } from "react";

// Stateless function
const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalCount}</span>
      </a>
    </nav>
  );
};

export default Navbar;
