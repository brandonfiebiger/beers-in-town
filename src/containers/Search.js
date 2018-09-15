import React, { Component } from 'react';
import { fetchEventDataBySearch } from '../thunks/fetchEventDataBySearch';
import { fetchGroupDataBySearch } from '../thunks/fetchGroupDataBySearch';
import { fetchBreweryDataBySearch } from '../thunks/fetchBreweryDataBySearch';
import { connect } from 'react-redux';

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
    const { city, state } = this.state
    this.props.getEvents(this.state.city, this.state.state)
    this.props.getGroups(this.state.city, this.state.state)
    this.props.getBreweries(this.state.city, this.state.state)
  }


  render() {
    return(
      <form onSubmit={ this.handleSubmit } >
        <input name='city' value={this.state.city} onChange={this.handleChange}/>
        <input name='state' value={this.state.state} onChange={this.handleChange}/>
        <button>Search</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getEvents: (city, state) => dispatch(fetchEventDataBySearch(city, state)),
  getGroups: (city, state) => dispatch(fetchGroupDataBySearch(city, state)),
  getBreweries: (city, state) => dispatch(fetchBreweryDataBySearch(city,state))
})

export default connect(null, mapDispatchToProps)(Search);