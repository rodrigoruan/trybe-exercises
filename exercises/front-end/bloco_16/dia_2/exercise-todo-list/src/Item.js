import React from 'react'
import PropTypes from 'prop-types'

function Item(props) {
  const { content, addConcluded } = props
  return (
    <div onDoubleClick={() => addConcluded(content)} className="Item">
      {content}
    </div>
  )
}

export default Item

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
