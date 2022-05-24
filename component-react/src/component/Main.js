import React, { Component } from "react";

//setState
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //seperti nama var
      title: "Menu Makanan",
      title2: "Menu Minuman"
    };
    this.rubahData = this.rubahData.bind(this);
  }
//   rubahData() {
//     this.setState({ title: "Pilih Makanan" });
//   }
  //penulisan setState lainnya
  rubahData(){
      //fungsi parameter jika datanya membutuhkan state
      this.setState((state,props)=>{
          return{ title:state.title2,title2: state.title }
      })
    }
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah Data</button>
      </div>
    );
  }
}

export default Main;
