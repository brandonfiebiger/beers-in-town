import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export const EventInfo = (props) => {

  return(
    <div>
      <h1>{props.eventProps.name}</h1>
      <h2>By: {props.eventProps.groupName}</h2>
      { props.eventProps.ven ? <h3>At: {props.eventProps.ven.name}</h3> : '' }
      <p>{props.eventProps.date}</p>
      <p>{props.eventProps.time}</p>
      <section>{ReactHtmlParser(props.eventProps.desc)}</section>
    </div>
  )
}

export default EventInfo;