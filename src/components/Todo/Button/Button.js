import React from 'react'
import classes from './Button.css'

const Button = props => (
  <button
    className={[
      classes.button,
      classes[props.status],
      'button--item-hover',
    ].join(' ')}
    onClick={props.clicked}
    id={props.id}
  >
    {props.status === 'done' ? '\u27F2' : '\u2714'}
  </button>
)

export default Button
