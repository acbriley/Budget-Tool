import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <Link to="/">
          <h1>Budget Tool</h1>
        </Link>
      </header>
    </div>
  );
}

const headerStyle = {
  color: "#333",
  textAlign: "center",
};

export default Header;
