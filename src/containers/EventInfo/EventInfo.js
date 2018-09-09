import React from 'react';
// import { withRouter } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export const EventInfo = (props) => {
  console.log(props)
  const handleRoute = () => {
    props.history.push('/events')
  }

  return(
    <div>
      <button onClick={() => handleRoute()}>events</button>
      <h1>{props.cardsProps.name}</h1>
      <h2>By: {props.cardsProps.groupName}</h2>
      <h3>At: {props.cardsProps.ven.name}</h3>
      <p>{props.cardsProps.date}</p>
      <p>{props.cardsProps.time}</p>
      <section>{ReactHtmlParser(props.cardsProps.desc)}</section>
    </div>
  )
}

export default EventInfo;