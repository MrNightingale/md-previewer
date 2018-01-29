import React from 'react';
import PropTypes from 'prop-types';

function Output(props) {
  const { onChange } = props

  return (
    <div style={{
      display: 'inline-block',
      width: '45%',
      padding: '0 2.5%',
      verticalAlign: 'top',
      textAlign: 'left'
    }}
      dangerouslySetInnerHTML={onChange()}
    >
    </div>
  )
}

Output.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Output