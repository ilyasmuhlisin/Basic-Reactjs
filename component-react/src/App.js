import React, { Component } from "react";

//menggunakan class dalam 1 file
class Header extends Component {
  render () {
    return(
      <div>
        <h2>Makanan</h2>
      </div>
    )
  }
}

//menggunakan class
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1> Rendering Element </h1>
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
