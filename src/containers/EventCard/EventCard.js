import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class EventCard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props)
    const { date, desc, group, time, venue, groupName, name } = this.props
    return(
    <div>
     <h2>{name}</h2>
     <p>{date}</p>
     <p>{time}</p>
     <h3>{groupName}</h3>
    </div>

    )
  }
}

export const mapStateToProps = state => ({
  events: state.events
})



export default connect(mapStateToProps, null)(EventCard);