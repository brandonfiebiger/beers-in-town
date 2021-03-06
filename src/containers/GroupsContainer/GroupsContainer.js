import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import GroupCard from '../GroupCard/GroupCard'
import './GroupsContainer.css';

export class GroupContainer extends Component {
  constructor(props) {
    super(props);

  }

  displayGroups = () => this.props.groups.map(group => {
    return <GroupCard {...group} key={group.id} />
  })

  render() {
    return(
      <section className="GroupsContainer">
      {this.displayGroups()}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  groups: state.groups
})



export default connect(mapStateToProps, null)(GroupContainer);


GroupContainer.propTypes = {
  groups: PropTypes.array
}