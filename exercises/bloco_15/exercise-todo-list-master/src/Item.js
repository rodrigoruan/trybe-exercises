import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { content, onClick } = props;
  return (
    <div data-testid='id-task-saved' className='Item' onClick={() => onClick(content)}>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
