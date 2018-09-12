import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export const GroupInfo = (props) => {

  return(
    <section>
      {props.groupProps.name}
    </section>
  )
}

export default GroupInfo;