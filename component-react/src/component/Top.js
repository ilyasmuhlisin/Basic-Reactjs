import React from "react";

//handlingevent pada function
const Top = () => {
  function handlePesan() {
    alert("Halaman Top Tampil");
  }
  return (
    <a href="/" onClick={handlePesan}>
      Halaman Top
    </a>
  );
};

export default Top;
