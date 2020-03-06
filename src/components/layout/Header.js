import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Word Guessing Game</h1>
      <Link to="/">Home</Link> | <Link to="/play">Play</Link> |{" "}
      <Link to="/about">Rule</Link>
    </header>
  );
}
