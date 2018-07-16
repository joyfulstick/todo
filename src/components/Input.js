import React from 'react'

const Input = props => (
  <input
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    disabled={props.disabled}
    onChange={props.changed}
  />
)

export default Input
