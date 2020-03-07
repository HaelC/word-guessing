import React from "react";

function Wordlist({ level, wordlist }) {
  // let wordLength = 2 * level + 1;
  return (
    <div>
      <ul>
        {wordlist.map(word => (
          <li>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default Wordlist;
