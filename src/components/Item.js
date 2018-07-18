import React from 'react'
import './Item.css'

const Item = props => (
  <li
    draggable
    className="item"
    onDragStart={props.dragStarted}
    onDragEnter={props.dragEnter}
  >
    <div className="container">{props.children}</div>
  </li>
)

export default Item
