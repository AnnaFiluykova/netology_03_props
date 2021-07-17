import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    from: PropTypes.shape({ name: PropTypes.string }),
    time: PropTypes.string,
  }).isRequired
}

const Typing = (props) => {
  return (
    <li className='clearfix'>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online" />
          {props.data.from.name}
        </span>
        <span className="message-data-time">{props.data.time}</span>
      </div>
      <div className="typing">
        <i className="fa fa-circle online" />
        <i className="fa fa-circle green50" />
        <i className="fa fa-circle green20" />
      </div>
    </li>
  )
}

Typing.propTypes = propTypes;

export default Typing;
