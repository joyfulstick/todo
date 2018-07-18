import React from 'react'
import './Item.css'

const Item = props => (
  <li
    draggable
    className="item"
    onDragStart={props.dragStarted}
    onDragEnter={props.dragEnter}
    id={props.id}
    status={props.status}
  >
    <div className="container" status={props.status} id={props.id}>
      {props.children}
    </div>
  </li>
)

export default Item
