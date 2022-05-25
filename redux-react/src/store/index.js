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
  //dikembalikan di state counter
  return state;
};

const store = createStore(reducer);

export default store;
