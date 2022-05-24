import React from "react";

//membuat fucntion component dalam 1 file
//props di function
const Footer = (props) => {
  return  (
    <div>
      {/* sesuai nama properti di app */}
      <h4>Halaman Footer {props.name}</h4>
      <p>@{props.tahun}</p>
    </div>
  )
}

export default Footer;