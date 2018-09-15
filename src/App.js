import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Search  from './containers/Search';
import ContentRouter from './components/ContentRouter/ContentRouter';
import { fetchEventDataByLocation } from '../src/thunks/fetchEventDataByLocation';
import { fetchBreweryDataByLocation } from '../src/thunks/fetchBreweryDataByLocation';
import { getLocation } from '../src/actions';
import { fetchGroupDataByLocation } from '../src/thunks/fetchGroupDataByLocation';
import { cleanGroupData } from '../src/utils/helper'


class App extends Component {
  
  componentDidMount() {
    const { getGroups, getUserLocation } = this.props
    navigator.geolocation.getCurrentPosition( async (location) => {
      getUserLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})
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
  getUserLocation: (location) => dispatch(getLocation(location)),
  getGroups: (latitude, longitude) => dispatch(fetchGroupDataByLocation(latitude, longitude))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
