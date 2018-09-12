import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export const GroupInfo = (props) => {

  return(
    <section>
      <h2>{props.groupProps.name}</h2>
    </section>
  )
}

export default GroupInfo;