import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './BreweryCard.css';

export class BreweryCard extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { address_1, rating, city, id, state, name, phone } = this.props
    return(
      <section className="BreweryCard">
        <h1>{ name }</h1>
        <h4>{ city }, { state }</h4>
        <h5>{ address_1 }</h5>
        <h6>{ phone }</h6>
        <h3>rating {Number.parseFloat(rating).toFixed(2)} out of 5</h3>
      </section>
    )
  }
}

export default withRouter(connect(null, null)(BreweryCard));

BreweryCard.propTypes = {
  address_1: PropTypes.string,
  rating: PropTypes.number,
  city: PropTypes.string,
  id: PropTypes.number,
  state: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string
};
