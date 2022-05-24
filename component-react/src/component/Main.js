import React, { Component } from "react";

//setState
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //seperti nama var
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "Nasi Padang"
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //   rubahData() {
  //     this.setState({ title: "Pilih Makanan" });
  //   }
  //penulisan setState lainnya
  rubahData() {
    //fungsi parameter jika datanya membutuhkan state
    this.setState((state, props) => {
      return { title: state.title2, title2: state.title };
    });
  }
  handleChange(e){
    //setState di input
    this.setState({inputValue: e.target.value})
    // console.log(e.target.value)

    //cara lainnya
    // const eventTarget = e.target.value;
    // this.setState((state,props)=>{
    //     return {
    //         inputValue: eventTarget
    //     }
    // })
  }
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah Data</button>
        {/* set default input value */}
        <br />
        <br />
        <input type="text"value={this.state.inputValue} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Main;
