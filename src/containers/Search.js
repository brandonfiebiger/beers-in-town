import React, { Component } from 'react';
import { fetchEventDataBySearch } from '../thunks/fetchEventDataBySearch';
import { connect } from 'react-redux';

export class Search extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      location: ''
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
    this.props.getEvents(this.state.location)
  }


  render() {
    return(
      <form onSubmit={ this.handleSubmit } >
        <input name='location' value={this.state.location} onChange={this.handleChange}/>
        <button>Search</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getEvents: location => dispatch(fetchEventDataBySearch(location))
})

export default connect(null, mapDispatchToProps)(Search);