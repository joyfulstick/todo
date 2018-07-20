import './Button.css'
import React from 'react'

const Button = props => (
  <button
    className={`button ${props.btnType === '\u2714' &&
      'done'} ${props.btnType === '\u27F2' && 'todo'}`}
    onClick={props.clicked}
    id={props.id}
  >
    {props.btnType}
  </button>
)

export default Button
