// @flow

import React from 'react'
import PropTypes from 'prop-types'

const Button = (props: any) => (
  <button
    onClick={props.handleClick}
    className="btn btn-primary"
    type="button"
  >
    {props.label}
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Button
