import React from "react";

function History({ wordHistory, correctHistory }) {
  return (
    <div>
      <ul>
        {wordHistory.map(word => (
          <li>{word}</li>
        ))}
      </ul>
      <ul>
        {correctHistory.map(correct => (
          <li>{correct}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
