import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { selectLevel } from "../actions/levelAction";

function Level(props) {
  const dict = {
    "Very easy": 0,
    Easy: 1,
    Average: 2,
    Hard: 3,
    "Very hard": 4
  };

  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  const [level, setLevel] = useState(0);

  // const onSubmit = event => {
  //   event.preventDefault();
  //   alert(level);
  //   this.props.changeLevel(level);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    toggle();
    props.handleSubmit(level);
  };

  // const onClick = event => {
  //   event.preventDefault();
  //   toggle();
  //   // props.changeLevel(level);
  //   props.onClick(level);
  //   //this.props.selectLevel(level);
  // };

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader>Select Difficulty:</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="level">Level</Label>
              <Input
                type="select"
                name="select"
                id="level"
                onChange={event => setLevel(dict[event.target.value])}
              >
                <option>Very easy</option>
                <option>Easy</option>
                <option>Average</option>
                <option>Hard</option>
                <option>Very hard</option>
              </Input>
            </FormGroup>
            <Button color="primary" type="submit">
              Select
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

let mapDispatchToProps = function(dispatch, props) {
  return {
    // onClick: level => {
    //   dispatch(selectLevel(level));
    // },
    handleSubmit: level => {
      dispatch(selectLevel(level));
    }
  };
};

export default connect(null, mapDispatchToProps)(Level);
