import './Input.css'
import React from 'react'

const Input = props => (
  <input
    className={`input ${props.type === 'text' && 'text'} ${props.type ===
      'submit' && 'submit'}`}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    disabled={props.disabled}
    onChange={props.changed}
  />
)

export default Input
