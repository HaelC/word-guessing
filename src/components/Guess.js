import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

export class Guess extends Component {
  state = {
    guessing: ""
  };

  onChange = e => {
    this.setState({
      guessing: e.target.value
    });
  };

  onClick = e => {
    e.preventDefault();
    console.log(this.state.guessing);
    this.setState({
      guessing: ""
    });
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Input
              type="text"
              id="guess"
              name="guess"
              value={this.state.guessing}
              onChange={this.onChange}
            ></Input>
            <Button color="primary" type="submit" onClick={this.onClick}>
              Guess
            </Button>
          </FormGroup>
        </Form>
        <p>{this.state.guessing}</p>
      </div>
    );
  }
}

export default Guess;
