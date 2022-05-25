import React, { Component } from "react";
// import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";

class App extends Component {
  render() {
    return (
      <div>
        <LoginButton/>
        <LogoutButton/>
        {/* <Button primary>{this.props.tes}</Button> */}
      </div>
    );
  }
}

// untuk menerima global state
const stateApp = (state) => {
  return {
    tes: state.tes,
  };
};

export default connect(stateApp)(App);
