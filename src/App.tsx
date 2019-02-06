import React, { Component } from 'react';
import { observer } from 'mobx-react';
import logo from './logo.svg';
import './App.css';
import { AppState } from './model/app-state';

@observer
class App extends Component {

  appState = new AppState();

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
		  <p>Count: {this.appState.count}</p>
		  <p>
			  <button onClick={(e) => this.appState.resetCounter()}>Reset</button>&nbsp; 
			  <button onClick={(e) => this.appState.increaseCounter()}>Hit me!</button>
		  </p>
        </header>
      </div>
    );
  }
}

export default App;
