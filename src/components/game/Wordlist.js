import React, { Component } from "react";
import { connect } from "react-redux";

class Wordlist extends Component {
  // let wordLength = 2 * level + 1;
  render() {
    // this.props.testGenerating(this.props.level);

    return (
      <div>
        <h2>Word List</h2>
        <ul>
          {this.props.candidates.map(word => (
            <li className="word">{word.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    candidates: state.words.candidates
  };
}

export default connect(mapStateToProps, null)(Wordlist);
