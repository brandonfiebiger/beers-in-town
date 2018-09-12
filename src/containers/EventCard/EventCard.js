import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import  EventInfo  from '../EventInfo/EventInfo';
import { getPropsFromEvent } from '../../actions/index';

class EventCard extends Component {
  constructor(props) {
    super(props);

  }

  handleClick = () => {
    this.props.sendPropsFromCard(this.props)
  }

  render() {
    const { date, desc, group, time, ven, groupName, name, id } = this.props
    return(
    <div>
     <h2>{name}</h2>
     <p>{date}</p>
     <p>{time}</p>
     <h3>{groupName}</h3>
     <h4>{ven.name}</h4>
     <NavLink onClick={this.handleClick} to={`/events/${id}`} className='nav'>event info</NavLink>
    </div>
    )
  }
}

export const mapStateToProps = state => ({
  events: state.events
})

export const mapDispatchToProps = dispatch => ({
  sendPropsFromCard: eventProps => dispatch(getPropsFromEvent(eventProps))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventCard));