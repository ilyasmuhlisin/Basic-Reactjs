import React, { Component } from "react";
//import class component terpisah
import Header from "./Header"
//import function component
import Footer from "./Footer";

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
        <Header />
        <h1> Rendering Element </h1>
        <Content />
        <Footer />
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
