import React from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, Button } from "reactstrap";
import { clearLevel } from "../../actions/levelAction";

function Gameover(props) {
  return (
    <div>
      <Modal isOpen={true}>
        <ModalBody>
          <p>{props.win ? "You Win!" : "Game over!"}</p>
          <p>
            The answer is <span>{props.answer.toUpperCase()}</span>.
          </p>
          <Button
            color="primary"
            onClick={props.clearLevel}
            className="mx-auto d-block"
          >
            New game
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default connect(null, { clearLevel })(Gameover);
