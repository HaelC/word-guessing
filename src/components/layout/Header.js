import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Word Guessing Game</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/play">
        Play
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        Rule
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  marginBottom: "20px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "20px"
};
