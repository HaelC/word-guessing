import React from "react";

function Wordlist({ level, wordlist }) {
  return (
    <div>
      <p>{level}</p>
      <ul>
        {wordlist.map(word => (
          <li>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default Wordlist;
