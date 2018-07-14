import React, { Component } from 'react'; // import of react component
import logo from './logo.svg'; // import of logo react
import './App.css';

import Today from './Today/Today'; // Import the Today component to be used below
import History from './History/History'; // Import the History component to be used below


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <section className="results--section">
              <div className="container">
                  <h1>PusherCoins is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
              </div>
              <div className="results--section__inner">
                  <Today />
                  <History />
              </div>
          </section>
          <section><div>FOOTER</div></section>
      </div>
    );
  }
}

export default App;
