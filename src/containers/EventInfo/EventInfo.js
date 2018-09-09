import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export const EventInfo = (props) => {

  return(
    <div>
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