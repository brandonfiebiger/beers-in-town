import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Search  from './containers/Search';
import ContentRouter from './components/ContentRouter/ContentRouter';
import { getLocation } from '../src/actions';

export class App extends Component {
  
  componentDidMount() {
    const { getUserLocation } = this.props;
    navigator.geolocation.getCurrentPosition((location) => {
      getUserLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
    });
  }

  
  render() {

    return (
      <div className="App">
        <h1 id="app-header">BEERS IN TOWN</h1>
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
});

export default withRouter(connect(null, mapDispatchToProps)(App));


App.propTypes = {
  getUserLocation: PropTypes.func,
  getGroups: PropTypes.func
};