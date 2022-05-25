import React, { Component } from "react";

//props di class
class Image extends Component {
    render(){
        return (
          <img
            src={this.props.linkImg}
            width={this.props.lebar}
          />
        );
    }
}

export default Image;