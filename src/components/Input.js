import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { value, onChange } = props

  return (
    <div style={{
      display: 'inline-block',
      width: '45%',
      padding: '0 2.5%',
    }}>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Enter text here"
        style={{
          width: '100%',
          height: 750,
          border: '3px dotted #e5e5e5',
          boxShadow: 'inset 0 -1px 0 0 #e5e5e5, inset 0 1px 0 0 #e5e5e5, 0 1px 0 0 #e5e5e5, 0 -1px 0 0 #e5e5e5'
        }}
      >
      </textarea>
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input