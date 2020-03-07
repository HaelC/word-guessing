import React, { Component } from "react";
import { connect } from "react-redux";
import Level from "../Level";
import Wordlist from "../Wordlist";

class Play extends Component {
  state = {
    // level: -1,
    wordlist: [],
    wordlist1: ["hello", "world"],
    dict: {}
  };

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/hunterjorgensen167/4478cd2ca4bfa2062ed0f1d2dfb08ee1/raw/cd5a597fd303088903131134c76c91b8359c47b0/word_list"
    )
      .then(r => r.text())
      .then(text => text.split("\n"))
      .then(dict =>
        this.setState({
          wordlist: dict.sort(() => 0.5 - Math.random()).slice(0, 2000)
        })
      );
    // let lenDict = {};
    // for (let len = 4; len <= 15; len++) {
    //   lenDict[len] = [
    //     ...this.state.wordlist.filter(word => word.length === len)
    //   ];
    // }
    // this.setState({
    //   dict: lenDict
    // });
  }

  // changeLevel = selectedLevel => {
  //   this.setState({ level: selectedLevel });
  // };

  // const wordlist = ["hello", "world", "this", "is", "hael"];

  render() {
    if (this.props.level === -1) {
      return (
        <div>
          <Level changeLevel={this.changeLevel} />
        </div>
      );
    }

    return (
      <div>
        {/* <p>{level}</p> */}
        <p>{this.props.level}</p>
        <Wordlist level={this.props.level} wordlist={this.state.wordlist} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    level: state.difficulty.level
  };
}

export default connect(mapStateToProps, null)(Play);
