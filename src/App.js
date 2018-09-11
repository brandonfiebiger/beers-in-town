import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { Search } from './containers/Search';
import ContentRouter from './components/ContentRouter/ContentRouter';
import { fetchEventDataByLocation } from '../src/thunks/fetchEventDataByLocation';
import { fetchBreweryDataByLocation } from '../src/thunks/fetchBreweryDataByLocation';
import { getLocation } from '../src/actions';
import { fetchGroupDataByLocation } from '../src/thunks/fetchGroupDataByLocation';
import { populateGroupsFromLocation } from '../src/actions'


class App extends Component {
  
  async componentDidMount() {
    navigator.geolocation.getCurrentPosition( async (location) => {
      this.props.getUserLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})
      const groups = await fetchGroupDataByLocation(location.coords.latitude, location.coords.longitude);
      // this.props.getGroups(groups)
    });
    this.callBackendAPI()
  }


  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
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
  // getGroups: groups => dispatch(populateGroupsFromLocation(groups))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
