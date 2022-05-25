import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.hanndleChange = this.hanndleChange.bind(this);
    this.hanndleSubmit = this.hanndleSubmit.bind(this);
  }

  hanndleChange(e) {
    this.setState({ value: e.target.value });
  }

  hanndleSubmit(e){
      e.preventDefault();
      alert("Pesan Input adalah : " + this.state.value)
  }
  render() {
    return (
      <form onSubmit={this.hanndleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.hanndleChange}
        />
        <input type="submit" value="Submit Data" />
      </form>
    );
  }
}

export default Form;
