import React, { Component } from "react";
// import { Button } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Menu pointing inverted color="blue">
          <Menu.Item
            name="home"
            as={Link}
            to="/home"
            active={this.props.activeItem === "home"}
            onClick={this.props.onClickHeader}
          />{" "}
          <Menu.Item
            name="film"
            as={Link}
            to="/film"
            active={this.props.activeItem === "film"}
            onClick={this.props.onClickHeader}
          />{" "}
          <Menu.Item
            name="actor"
            as={Link}
            to="/actor"
            active={this.props.activeItem === "actor"}
            onClick={this.props.onClickHeader}
          />{" "}
          <Menu.Menu position="right">
            <LoginButton />
            <LogoutButton />
          </Menu.Menu>{" "}
        </Menu>{" "}
      </div>
    );
  }
}

// untuk menerima global state
const mapStatetoProps = (state) => {
  return {
    activeItem: state.activeItem,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onClickHeader: (e, { name }) => {
      const action = { type: "ACTIVE_ITEM", Activeitem: name };
      dispatch(action);
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
