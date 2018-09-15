import React, { Component } from 'react';
import { fetchEventDataBySearch } from '../thunks/fetchEventDataBySearch';
import { connect } from 'react-redux';

export class Search extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
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
    this.props.getEvents(this.state.city, this.state.state)
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
  getEvents: (city, state) => dispatch(fetchEventDataBySearch(city, state))
})

export default connect(null, mapDispatchToProps)(Search);