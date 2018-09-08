import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import EventCard from '../EventCard/EventCard'

export class EventContainer extends Component {
  constructor(props) {
    super(props);

  }

  // displayEvents = () => this.props.events.map(event => {
  //   return <div>{ ReactHtmlParser(event.desc) }</div>
  // })

  displayEvents = () => this.props.events.map(event => {
    return <EventCard {...event} />
  })

  render() {
    return(
      <section>
      {this.displayEvents()}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  events: state.events
})



export default connect(mapStateToProps, null)(EventContainer);