import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { Search } from './containers/Search';
import ContentRouter from './components/ContentRouter/ContentRouter';
import { fetchEventDataByLocation } from '../src/thunks/fetchEventDataByLocation';
import { fetchBreweryDataByLocation } from '../src/thunks/fetchBreweryDataByLocation'


class App extends Component {
  
  async componentDidMount() {
    navigator.geolocation.getCurrentPosition( async (location) => {
      await this.props.populateEvents(location.coords.latitude, location.coords.longitude)
      await this.props.populateBreweries(location.coords.latitude, location.coords.longitude)
    });
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
  populateEvents: (latitude, longitude) => dispatch(fetchEventDataByLocation(latitude, longitude)),
  populateBreweries: (latitude, longitude) => dispatch(fetchBreweryDataByLocation(latitude, longitude))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
