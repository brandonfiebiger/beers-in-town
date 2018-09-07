import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { url } from './utils/variables'

class App extends Component {
  
  async componentDidMount() {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
