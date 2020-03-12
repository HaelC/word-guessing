import React, { Component } from "react";
import { connect } from "react-redux";
import Level from "../game/Level";
import Wordlist from "../game/Wordlist";
import { clearLevel } from "../../actions/levelAction";
import {
  fetchWords,
  generateTargets,
  shuffleList
} from "../../actions/wordAction";
import Guess from "../game/Guess";

class Play extends Component {
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

  _getWordLength(level) {
    switch (level) {
      case 0:
        return Math.floor(Math.random() * 2) + 4;
      case 1:
        return Math.floor(Math.random() * 2) + 6;
      case 2:
        return Math.floor(Math.random() * 3) + 8;
      case 3:
        return Math.floor(Math.random() * 3) + 11;
      case 4:
        return Math.floor(Math.random() * 2) + 14;
      default:
        return 0;
    }
  }

  _getWordNumber(level) {
    switch (level) {
      case 0:
        return Math.floor(Math.random() * 2) + 5;
      case 1:
        return Math.floor(Math.random() * 2) + 7;
      case 2:
        return Math.floor(Math.random() * 3) + 9;
      case 3:
        return Math.floor(Math.random() * 2) + 12;
      case 4:
        return Math.floor(Math.random() * 2) + 14;
      default:
        return 0;
    }
  }

  render() {
    if (this.props.level === -1) {
      return (
        <div>
          {/* <Level changeLevel={this.changeLevel} /> */}
          <Level />
        </div>
      );
    }

    // this.props.generateTargets(this.props.level);
    this.props.generateTargets(
      this._getWordLength(this.props.level),
      this._getWordNumber(this.props.level)
    );
    this.props.shuffleList();
    // this.props.testGenerating(this.props.level);

    return (
      // <div className="container">
      <div className="row">
        {/* <p>{this.props.level}</p> */}
        <div className="col-4">
          <Wordlist level={this.props.level} />
        </div>
        <div className="col-8">
          <Guess />
        </div>
        {/* <button onClick={this.props.clearLevel}>test</button> */}
      </div>
      // </div>
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
