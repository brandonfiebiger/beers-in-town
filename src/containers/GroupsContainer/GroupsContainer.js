import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import EventCard from '../EventCard/EventCard'

export class GroupsContainer extends Component {
  constructor({props}) {
    super(props);

  }

  // displayEvents = () => this.props.events.map(event => {
  //   return <EventCard {...event} />
  // })

  render() {
    return(
      <section>
     nothing
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  events: state.groups
})



export default connect(mapStateToProps, null)(GroupsContainer);