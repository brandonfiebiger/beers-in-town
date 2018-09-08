import React from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import  EventContainer  from '../../containers/EventContainer/EventContainer';


const ContentRouter = () => {

  return(
    <div>
    <header>
      <NavLink to='/events' className='nav'>events</NavLink>
    </header>
      <Route exact path= '/events' component={EventContainer} />
    </div>
  )
}

export default ContentRouter;