import React from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, Button } from "reactstrap";
import { clearLevel } from "../../actions/levelAction";
import { initChance } from "../../actions/guessAction";

function Gameover(props) {
  if (props.correct === props.answer.length || props.chances === 0) {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalBody>
            <p>
              {props.correct === props.answer.length
                ? "You Win!"
                : "Game over!"}
            </p>
            <p>
              The answer is <span>{props.answer.toUpperCase()}</span>.
            </p>
            <Button
              color="primary"
              // onClick={props.clearLevel}
              onClick={() => {
                props.clearLevel();
                props.initChance();
              }}
              className="mx-auto d-block"
            >
              New game
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }

  return <div></div>;

  // return (
  //   <div>
  //     <Modal isOpen={true}>
  //       <ModalBody>
  //         <p>{props.win ? "You Win!" : "Game over!"}</p>
  //         <p>
  //           The answer is <span>{props.answer.toUpperCase()}</span>.
  //         </p>
  //         <Button
  //           color="primary"
  //           onClick={props.clearLevel}
  //           className="mx-auto d-block"
  //         >
  //           New game
  //         </Button>
  //       </ModalBody>
  //     </Modal>
  //   </div>
  // );
}

function mapStateToProps(state, props) {
  return {
    answer: state.words.answer,
    correct: state.guess.correct,
    chances: state.guess.chances
  };
}

export default connect(mapStateToProps, { clearLevel, initChance })(Gameover);
