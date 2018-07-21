import React from 'react'
import classes from './ItemContent.css'

const ItemContent = props => (
  <p
    className={[
      classes.content,
      classes[props.status],
      'content--item-hover',
    ].join(' ')}
  >
    {props.children}
  </p>
)

export default ItemContent
