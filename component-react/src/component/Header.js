import React, { Component } from "react";

//handleevent menggunakan class
class Header extends Component {
  //state seperti variable namun lebih dinamis dan tidak perlu render ulang setiap tambahan data"
  constructor(props) {
    super(props);
    this.state = {
      //seperti nama var
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list,
      statusRendering: true,
      date: new Date(),
    };
    //harus menulis diconstructor
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e) {
    //supaya tidak ada proses reload
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }
  //method akan otomatis berjaln setelah fungsi render
  componentDidMount() {
    console.log("Jalan : ComponentDidMount");
  }
  //method untuk merubah state statusRendering
  handleElement() {
    this.setState((state, props) => {
      return {
        //mengubah nilai kebalikannya
        statusRendering: !state.statusRendering,
      };
    });
  }
  render() {
    console.log("Jalan : Render");
    // conditional rendering inline
    return (
      <div>
        {this.state.statusRendering === true ? (
          // jika lebih dari 1 element bungkus dengan div
          <div>
            <h1>Selamat Datang</h1>
            <h2>Silahkan pilih Makanan</h2>
          </div>
        ) : (
          <h1>Selamat Tinggal</h1>
        )}
        <button onClick={this.handleElement}>Change</button>
      </div>
    );
    // return (
    //   <div>
    //     <h2>Makanan</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.dataList}</p>
    //     {/* parameter e/event untuk preventdefault */}
    //     <a href="/" onClick={(e) => this.handlePesan("Pesan Dari Header",e)}>
    //       Halaman Header
    //     </a>
    //   </div>
    // );
  }
}

export default Header;
