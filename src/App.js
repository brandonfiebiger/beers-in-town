import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { url } from './utils/variables';
import { Search } from './containers/Search';
import ContentRouter from './components/ContentRouter/ContentRouter';
import { populateFromLocation } from './actions/index';
import { eventCleaner } from './utils/helper';

class App extends Component {
  
  async componentDidMount() {
    const response = await fetch(url);
    const result = await response.json();
    const cleanEvents = eventCleaner(result.events)
    console.log(cleanEvents)
    this.props.populateEvents(cleanEvents)
  }
  
  render() {

    return (
      <div className="App">
        <h1>BEERS IN TOWN</h1>
        <Search />
        <section>
          <ContentRouter />
        </section>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateEvents: events => dispatch(populateFromLocation(events))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
