import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { Search } from './containers/Search';
import ContentRouter from './components/ContentRouter/ContentRouter';
import { cleanBreweryData } from './utils/helper';
import { fetchEventDataByLocation } from '../src/thunks/fetchEventDataByLocation';


class App extends Component {
  
  async componentDidMount() {
    let cleanBreweries;
    navigator.geolocation.getCurrentPosition( async (location) => {
      cleanBreweries = await cleanBreweryData(location.coords.latitude, location.coords.longitude)
      console.log(cleanBreweries);
      await this.props.populateEvents(location.coords.latitude, location.coords.longitude)
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
  populateEvents: (latitude, longitude) => dispatch(fetchEventDataByLocation(latitude, longitude))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
