import React, { Component } from "react";
import { connect } from "react-redux";
import Level from "../Level";
import Wordlist from "../Wordlist";
import { clearLevel } from "../../actions/levelAction";
import {
  fetchWords,
  generateTargets,
  shuffleList
} from "../../actions/wordAction";
import Guess from "../Guess";

class Play extends Component {
  state = {
    // level: -1,
    wordlist: [],
    wordlist1: ["hello", "world"],
    dict: {}
  };

  componentDidMount() {
    // fetch(
    //   "https://gist.githubusercontent.com/hunterjorgensen167/4478cd2ca4bfa2062ed0f1d2dfb08ee1/raw/cd5a597fd303088903131134c76c91b8359c47b0/word_list"
    // )
    //   .then(r => r.text())
    //   .then(text => text.split("\n"))
    //   .then(dict =>
    //     this.setState({
    //       wordlist: dict.sort(() => 0.5 - Math.random()).slice(0, 2000)
    //     })
    // );
    this.props.clearLevel();
    this.props.fetchWords();
  }

  // componentWillUnmount() {
  //   console.log("left");
  //   this.props.clearLevel();
  // }

  // changeLevel = selectedLevel => {
  //   this.setState({ level: selectedLevel });
  // };

  render() {
    if (this.props.level === -1) {
      return (
        <div>
          {/* <Level changeLevel={this.changeLevel} /> */}
          <Level />
        </div>
      );
    }

    this.props.generateTargets(this.props.level);
    this.props.shuffleList();
    // this.props.testGenerating(this.props.level);

    return (
      <div>
        <p>{this.props.level}</p>
        <Wordlist level={this.props.level} />
        <Guess />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    level: state.level
  };
}

export default connect(mapStateToProps, {
  fetchWords,
  clearLevel,
  generateTargets,
  shuffleList
})(Play);
