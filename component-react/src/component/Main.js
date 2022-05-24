import React, { Component } from "react";

//setState
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //seperti nama var
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
      menuMakanan: [
        { nama: "Mie Goreng", harga: 10000 },
        { nama: "Mie Ayam", harga: 20000 },
      ],
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

  //method dinamis untuk lebih dari input
  handleChange(value, e) {
    //setState di input
    this.setState({ [value]: e.target.value });
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
        <input
          type="text"
          value={this.state.inputValue}
          //   parameter untuk update
          onChange={(e) => this.handleChange("inputValue", e)}
          placeholder="nama"
        />
        <input
          type="text"
          value={this.state.inputKota}
          onChange={(e) => this.handleChange("inputKota", e)}
          placeholder="kota"
        />
        {/* membuat list dari data state perulangan map */}
        {this.props.menuMakanan.map((value, index) => {
          return (
            //   jika perulangan data harus menambah keys
            <div keys={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
