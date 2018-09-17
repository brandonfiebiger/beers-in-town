import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import PropTypes from 'prop-types';


export const GroupInfo = (props) => {
  return(
    <section>
      <h2>{props.groupProps.name}</h2>
      <h3>{props.groupProps.city}, {props.groupProps.state}</h3>
      {!props.groupProps.group_photo ? '' : <img src={props.groupProps.group_photo.photo_link}  /> }
      <article>
      {ReactHtmlParser(props.groupProps.description)}
      </article>
      {!props.groupProps.key_photo ? '' : <img src={props.groupProps.key_photo.photo_link} />}
    </section>
  )
}

export default GroupInfo;

GroupInfo.propTypes = {
  groupProps: PropTypes.object
};