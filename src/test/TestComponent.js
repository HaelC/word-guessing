import React, { useState } from "react";
import { connect } from "react-redux";
import { setTest } from "./testAction";

function TestComponent(props) {
  // const [test, settest] = useState(0);
  // console.log(props);
  return (
    <div>
      <input
        type="number"
        name="level"
        id="level"
        onChange={e => {
          // console.log(e.target.value);
          // settest(e.target.value);
          // console.log(test);
          props.updateValue(e.target.value);
        }}
      />
      {/* <p>{test}</p> */}
      <p>{props.val}</p>
    </div>
  );
}

let mapStateToProps = state => {
  return {
    val: state.test.val
  };
};

let mapDispatchToProps = function(dispatch, props) {
  return {
    updateValue: val => {
      dispatch(setTest(val));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
