import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import History from "./History";

export class Guess extends Component {
  state = {
    guessing: "",
    errorMessage: "",
    wordHistory: [],
    correctHistory: []
  };

  handleChange = e => {
    this.setState({
      guessing: e.target.value,
      errorMessage: ""
    });
  };

  _validate() {
    let len = this.props.candidates[0].length;
    if (this.state.guessing.length !== len) {
      this.setState({
        // errorMessage: "Your guessing should be a " + len + "-length word."
        errorMessage: `Your guessing should be a ${len}-length word.`
      });
      return false;
    } else if (
      !this.props.candidates.includes(this.state.guessing.toLowerCase())
    ) {
      this.setState({
        //errorMessage: "The word is not in the word list."
        errorMessage: `The word '${this.state.guessing}' is not in the word list.`
      });
      return false;
    }
    return true;
  }

  _countCorrect() {
    let count = 0;
    for (let i = 0; i < this.props.answer.length; i++) {
      if (this.state.guessing.toLowerCase()[i] === this.props.answer[i]) {
        count++;
      }
    }
    return count;
  }

  handleSubmit = e => {
    e.preventDefault();
    // this._validate();
    // if (this.state.errorMessage !== "") {
    //   console.log("what?");
    //   return;
    // }
    if (!this._validate()) {
      return;
    }

    let correct = this._countCorrect();
    if (correct === this.props.answer.length) {
      alert("You win!");
    } else {
      this.setState({
        wordHistory: [this.state.guessing, ...this.state.wordHistory],
        correctHistory: [correct, ...this.state.correctHistory]
      });
    }

    this.setState({
      guessing: ""
    });
  };

  render() {
    let chance = 4 - this.state.wordHistory.length;
    return (
      <div className="row">
        <div className="col-6">
          <History
            wordHistory={this.state.wordHistory}
            answer={this.props.answer}
          />
        </div>
        <div className="col-6">
          <p>
            Remaining chances: <span id="chance">{chance}</span>
          </p>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                id="guess"
                name="guess"
                value={this.state.guessing}
                onChange={this.handleChange}
              ></Input>
              <p class="error">{this.state.errorMessage}</p>

              <Button color="primary" type="submit" className="mx-auto d-block">
                Guess
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    candidates: state.words.candidates,
    answer: state.words.answer
  };
}

export default connect(mapStateToProps, null)(Guess);
