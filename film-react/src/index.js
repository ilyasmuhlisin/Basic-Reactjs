import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./appRoutes";
import reportWebVitals from "./reportWebVitals";
// import 'semantic-ui-css/semantic.min.css'
import { createStore } from "redux";
import { Provider } from "react-redux";

// global state
const stateFilm = {
  tes: 'coba redux'
}

const reducerFilm = (state = stateFilm) => {
  return state;
};

const store = createStore(reducerFilm);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
