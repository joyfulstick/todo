import React from 'react'

const Button = props => (
  <button onClick={props.changed} id={props.id}>
    {props.children}
  </button>
)

export default Button
