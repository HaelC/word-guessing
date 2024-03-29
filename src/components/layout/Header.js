import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Word Guessing Game</h1>
      <Link className="link" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="link" to="/play">
        Play
      </Link>{" "}
      |{" "}
      <Link className="link" to="/about">
        Rule
      </Link>
    </header>
  );
}
