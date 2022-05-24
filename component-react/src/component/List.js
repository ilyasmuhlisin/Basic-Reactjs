import React, { Component } from "react";
import Image from "./Image";

class List extends Component {
  render() {
    return (
      <ol>
        <Image lebar="500" linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
        <li>Nasi Padang</li>
        <Image lebar="400" linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
        <li>Sate</li>
        <Image lebar="300" linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
      </ol>
    );
  }
}

export default List;
