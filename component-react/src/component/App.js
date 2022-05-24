import React, { Component } from "react";
//import class component terpisah
import Header from "./Header"
//import function component
import Top from "./Top";
import Main from "./Main";
import Footer from "./Footer";
import List from "./List";

//membuat fucntion component dalam 1 file
const Content = () => {
  return  (
    <div>
      <h4>Halaman Content</h4>
    </div>
  )
}

//menggunakan class
class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 terbaik"/>
        <Top/>
        <Main/>
        <List/>
        <Content />
        {/* props/property */}
        <Footer name="Makanan Nusantara" tahun="2000"/>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
