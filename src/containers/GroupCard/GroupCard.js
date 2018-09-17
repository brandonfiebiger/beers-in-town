import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPropsFromGroup } from '../../actions/index';



export class GroupCard extends Component {
  constructor(props) {
    super(props) 

  }
  

  handleClick = () => {
    this.props.sendPropsFromCard(this.props)
  }


  render() {
    return(
      <article>
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.city }, {this.props.state}</h3>
        <NavLink onClick={this.handleClick} to={`/groups/${this.props.id}`} className='nav'>group info</NavLink>

      </article>
    )
  }
}


export const mapStateToProps = state => ({
  events: state.groups
})

export const mapDispatchToProps = dispatch => ({
  sendPropsFromCard: groupProps => dispatch(getPropsFromGroup(groupProps))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupCard));


GroupCard.propTypes = {
  events: PropTypes.array,
  sendPropsFromCard: PropTypes.func,
  name: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  id: PropTypes.number
};