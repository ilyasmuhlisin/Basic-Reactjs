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
    };
    //harus menulis diconstructor
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(value, e) {
    //supaya tidak ada proses reload
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }
  render() {
    return (
      <div>
        <h2>Makanan</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
        {/* parameter e/event untuk preventdefault */}
        <a href="/" onClick={(e) => this.handlePesan("Pesan Dari Header",e)}>
          Halaman Header
        </a>
      </div>
    );
  }
}

export default Header;
