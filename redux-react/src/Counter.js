import React from "react";
//connect=mengirimkan nilai dari function
import { connect } from "react-redux";

function Counter(props) {
  console.log("render =>", props);
  return (
    <div>
      <h1>Saya Mesin Penghitung</h1>
      <p>Count : {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button onClick={props.onDecrementClick}>Decrement</button>
    </div>
  );
}
//mengirim state ke props dan mengambil state yang telah diolah dari store
function mapStatetoProps(state) {
  console.log("mapStatetoProps", state);
  return {
    //mengambil dari state dan dikirimkan ke props counter
    count: state.count,
  };
}
// dispatch action
function mapDispatchtoProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log("tombol inc di click");
      const action = { type: "INCREMENT" };
      // mengirimkan action ke reducer
      dispatch(action);
    },
    onDecrementClick: () => {
      console.log("tombol dec di click");
      const action = { type: "DECREMENT" };
      // mengirimkan action ke reducer
      dispatch(action);
    },
  };
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
