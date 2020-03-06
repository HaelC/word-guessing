import React, { useState } from "react";
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

export default function Level(props) {
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

  const onClick = event => {
    event.preventDefault();
    toggle();
    props.changeLevel(level);
  };

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader>Select Difficulty:</ModalHeader>
        <ModalBody>
          <Form>
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
            <Button color="primary" type="submit" onClick={onClick}>
              Select
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
