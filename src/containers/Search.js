import React, { Component } from 'react';
import { fetchEventDataByLocation } from '../thunks/fetchEventDataByLocation';
import { fetchGroupDataBySearch } from '../thunks/fetchGroupDataBySearch';
import { fetchBreweryDataByLocation } from '../thunks/fetchBreweryDataByLocation';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGroupDataByLocation } from '../thunks/fetchGroupDataByLocation';


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
    this.props.getEvents(latitude, longitude);
    this.props.getBreweries(latitude, longitude);
    this.props.getGroups(latitude, longitude);
    this.props.history.push('/events');
  }


  render() {
    return(
      <form onSubmit={ this.handleSubmit } >
        <input name='city' value={this.state.city} onChange={this.handleChange} placeholder="city Ex. Madison"/>
        <input name='state' value={this.state.state} onChange={this.handleChange} placeholder="state Ex. WI"/>
        <button>Search</button>
      </form>
    )
  }
}

export const mapStateToProps = state => ({
  location: state.location
})

export const mapDispatchToProps = dispatch => ({
  getLocation: (city, state) => dispatch(fetchGroupDataBySearch(city, state)),
  getEvents: (latitude, longitude) => dispatch(fetchEventDataByLocation(latitude, longitude)),
  getBreweries: (latitude, longitude) => dispatch(fetchBreweryDataByLocation(latitude, longitude)),
  getGroups: (latitude, longitude) => dispatch(fetchGroupDataByLocation(latitude, longitude))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

Search.propTypes = {
  getEvents: PropTypes.func,
  getGroups: PropTypes.func,
  getBreweries: PropTypes.func
};