import React from "react";

//handlingevent pada function
const Top = () => {
  function handlePesan(value) {
    alert("Halaman Top Tampil");
    alert(value);
  }
  return (
    <a href="/" onClick={()=>handlePesan("Pesan Dari Top")}>
      Halaman Top
    </a>
  );
};

export default Top;
