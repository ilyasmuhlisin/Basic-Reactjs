import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./appRoutes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import reportWebVitals from "./reportWebVitals";
// import 'semantic-ui-css/semantic.min.css'
import { Auth0Provider } from "@auth0/auth0-react";
import { createStore } from "redux";
import { Provider } from "react-redux";

// global state
const stateFilm = {
  activeItem: "home",
};

const reducerFilm = (state = stateFilm, action) => {
  switch (action.type) {
    case "ACTIVE_ITEM":
      var stateActiveItem = { ...state, activeItem: action.Activeitem };
      return stateActiveItem;
    default:
      return state;
  }
};

const store = createStore(reducerFilm);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="react-films.us.auth0.com"
      clientId="9aF3sbwrgk701HzRSEziXrRHXyVRPVOU"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
