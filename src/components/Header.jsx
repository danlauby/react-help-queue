import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>React Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Header;
