import React, { Component } from "react";
import { connect } from "react-redux";

class Wordlist extends Component {
  render() {
    return (
      <div>
        <h2>Word List</h2>
        <ul>
          {this.props.candidates.map(word => (
            <li className="word" key={word.toUpperCase()}>
              {word.toUpperCase()}
            </li>
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
