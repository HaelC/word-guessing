import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import History from "./History";
import { clearLevel } from "../../actions/levelAction";
import Gameover from "./Gameover";

export class Guess extends Component {
  state = {
    guessing: "",
    errorMessage: "",
    wordHistory: []
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
        errorMessage: `Your guessing should be a ${len}-length word.`
      });
      return false;
    } else if (
      !this.props.candidates.includes(this.state.guessing.toLowerCase())
    ) {
      this.setState({
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
    if (!this._validate()) {
      return;
    }

    this.setState({
      wordHistory: [...this.state.wordHistory, this.state.guessing]
    });

    this.setState({
      guessing: ""
    });
  };

  render() {
    let len = this.state.wordHistory.length;
    let chance = 4 - len;

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
              <p className="error">{this.state.errorMessage}</p>

              <Button color="primary" type="submit" className="mx-auto d-block">
                Guess
              </Button>
              <Button
                color="secondary"
                className="mx-auto d-block"
                onClick={this.props.clearLevel}
              >
                New Game
              </Button>
            </FormGroup>
          </Form>
        </div>
        {len > 0 && this.state.wordHistory[len - 1] === this.props.answer ? (
          <Gameover win={true} answer={this.props.answer} />
        ) : (
          ""
        )}
        {chance === 0 ? (
          <Gameover win={false} answer={this.props.answer} />
        ) : (
          ""
        )}
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

export default connect(mapStateToProps, { clearLevel })(Guess);
