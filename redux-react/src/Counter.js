import React from "react";
//connect=mengirimkan nilai dari function
import { connect } from "react-redux";

function Counter(props) {
  console.log("render =>", props);
  return (
    <div>
      <h1>Saya Mesin Penghitung</h1>
      <p>Count : {props.count}</p>
      <button>Increment</button>
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
export default connect(mapStatetoProps)(Counter);
