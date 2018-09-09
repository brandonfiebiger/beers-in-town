import React from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import  EventContainer  from '../../containers/EventContainer/EventContainer';
import EventInfo from '../../containers/EventInfo/EventInfo';
import { connect } from 'react-redux';


const ContentRouter = (props) => {
  const handleEventRoute = () => {
    props.history.push('/events')
  }
  return(
    <div>
    <header>
      <button onClick={() => handleEventRoute()}>events</button>
    </header>
      <Route exact path= '/events' component={EventContainer} />
      <Route exact path={`/events/${props.cardsProps.id}`} render={() => <EventInfo {...props} />}/>
    </div>
  )
}

export const mapStateToProps = state => ({
  cardsProps: state.eventToView
})

export default withRouter(connect(mapStateToProps, null)(ContentRouter));