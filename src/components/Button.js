import React from 'react'
import './Button.css'

const Button = props => (
  <button
    className={`button ${props.btnType === '\u2714' &&
      'done'} ${props.btnType === '\u27F2' && 'todo'}`}
    onClick={props.toggled}
    id={props.id}
  >
    {props.btnType}
  </button>
)

export default Button
