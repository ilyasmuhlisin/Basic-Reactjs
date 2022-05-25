// untuk membuat store
import { createStore } from "redux";

//nilai awal state seperti var global
const initialState = {
  count: 10,
  x: 0,
};
// pengambilan data initialState dan diolah
const reducer = (state = initialState, action) => {
  console.log("reducer berjalan", action);
  // fungsi menambahkan nilai
  // karena yang dikirimkan di counter property type
  switch (action.type) {
    case "INCREMENT":
      // state disini menandakan jika tidak diklik menampilkan nilai awal
      return Object.assign({}, state, { count: state.count + 1 });
    case "DECREMENT":
      // state disini menandakan jika tidak diklik menampilkan nilai awal
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
  //dikembalikan di state counter
  return state;
};

const store = createStore(reducer);

export default store;
