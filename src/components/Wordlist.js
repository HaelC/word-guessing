import React from "react";
import { connect } from "react-redux";

function Wordlist(props) {
  // let wordLength = 2 * level + 1;
  return (
    <div>
      <ul>
        {props.candidates.map(word => (
          <li>{word}</li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    candidates: state.words.candidates
  };
}

export default connect(mapStateToProps, null)(Wordlist);
