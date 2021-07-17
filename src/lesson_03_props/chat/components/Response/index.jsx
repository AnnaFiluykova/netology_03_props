import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    from: PropTypes.shape({ name: PropTypes.string }),
    time: PropTypes.string,
    text: PropTypes.string,
  }).isRequired
}

const Response = (props) => {
  return (
    <li className='clearfix'>
      <div className="message-data align-right">
        <span className="message-data-name"><i className="fa fa-circle me" />{props.data.from.name}</span>
        <span className="message-data-time">{props.data.time}</span>
      </div>
      <div className="message other-message float-right">{props.data.text}</div>
    </li>
  )
}

Response.propTypes = propTypes;

export default Response;
