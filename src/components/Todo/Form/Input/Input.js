import React from 'react'
import classes from './Input.css'

const Input = props => (
  <input
    className={[classes.input, classes[props.type]].join(' ')}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    disabled={props.disabled}
    onChange={props.changed}
  />
)

export default Input
