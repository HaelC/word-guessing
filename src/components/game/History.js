import React from "react";

function History({ wordHistory, answer }) {
  let len = answer.length;

  const _countCorrect = word => {
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (word.toLowerCase()[i] === answer[i]) {
        count++;
      }
    }
    return count;
  };

  return (
    <div>
      <h3>Guessing History</h3>
      <ul>
        {wordHistory.map(word => (
          <li>
            <span className="word">{word.toUpperCase()} </span>
            {`${_countCorrect(word)}/${len} correct`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
