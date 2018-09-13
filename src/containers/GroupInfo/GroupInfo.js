import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export const GroupInfo = (props) => {

  return(
    <section>
      <h2>{props.groupProps.name}</h2>
      {!props.groupProps.group_photo ? '' : <img src={props.groupProps.group_photo.photo_link}  /> }
      {!props.groupProps.key_photo ? '' : <img src={props.groupProps.key_photo.photo_link} />}
    </section>
  )
}

export default GroupInfo;