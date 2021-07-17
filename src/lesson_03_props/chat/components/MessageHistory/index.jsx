import React from 'react';
import PropTypes from 'prop-types';

import Message from '../Message';
import Response from '../Response';
import Typing from '../Typing';

const propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      from: PropTypes.shape({ name: PropTypes.string }),
      type: PropTypes.string,
      time: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired
};

const MessageHistory = (props) => {
  return (
    <ul>
      {props.list.map((item) => {
        let component;

        if (item.type === 'message') {
          component = <Message data={item} key={`message-${item.id}`} />;
        } else if (item.type === 'response') {
          component = <Response data={item} key={`response-${item.id}`} />;
        } else {
          component = <Typing data={item} key={`typing-${item.id}`} />;
        }

        return component;
      })}
    </ul>

  )
};

MessageHistory.propTypes = propTypes;

export default MessageHistory;
