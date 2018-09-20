import React, { Component } from 'react';
import { fetchEventDataByLocation } from '../thunks/fetchEventDataByLocation';
import { fetchLocationBySearch } from '../thunks/fetchLocationBySearch';
import { fetchBreweryDataByLocation } from '../thunks/fetchBreweryDataByLocation';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { hasErrored } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGroupDataByLocation } from '../thunks/fetchGroupDataByLocation';
import './Search.css'

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [ name ]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { latitude, longitude } = this.props.location
    const { city, state } = this.state
    this.props.getLocation(this.state.city, this.state.state);
    this.props.history.push('/events');
  }


  render() {
    return(
      <form onSubmit={ this.handleSubmit } >
        <input className="location-inputs" name='city' value={this.state.city} onChange={this.handleChange} placeholder="city Ex. Madison"/>
        <input className="location-inputs" name='state' value={this.state.state} onChange={this.handleChange} placeholder="state Ex. WI"/>
        <button className="search-button">Search</button>
      </form>
    )
  }
}

export const mapStateToProps = state => ({
  location: state.location
})

export const mapDispatchToProps = dispatch => ({
  getLocation: (city, state) => dispatch(fetchLocationBySearch(city, state)),
  hasErrored: error => dispatch(hasErrored(error))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

Search.propTypes = {
  getEvents: PropTypes.func,
  getGroups: PropTypes.func,
  getBreweries: PropTypes.func
};