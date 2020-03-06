import React, { useState } from "react";
import Level from "../Level";
import Wordlist from "../Wordlist";

function Play() {
  const [level, setLevel] = useState(-1);

  const changeLevel = selectedLevel => {
    setLevel(selectedLevel);
  };

  const wordlist = ["hello", "world", "this", "is", "hael"];

  if (level === -1) {
    return (
      <div>
        <Level changeLevel={changeLevel} />
      </div>
    );
  }

  return (
    <div>
      {/* <p>{level}</p> */}
      <Wordlist level={level} wordlist={wordlist} />
    </div>
  );
}

export default Play;
