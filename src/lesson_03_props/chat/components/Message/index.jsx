import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    from: PropTypes.shape({ name: PropTypes.string }),
    time: PropTypes.string,
    text: PropTypes.string,
  }).isRequired
}

const Message = (props) => {
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-time">{props.data.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{props.data.from.name}</span>
        <i className="fa fa-circle online" />
      </div>
      <div className="message my-message">{props.data.text}</div>
    </li>
  )
}

Message.propTypes = propTypes;

export default Message;
