import './Item.css'
import Button from './Button'
import ItemContent from './ItemContent'
import React from 'react'

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
      <ItemContent>{props.name}</ItemContent>
      <Button
        id={props.id}
        clicked={props.clicked}
        btnType={props.status === 'done' ? '\u27F2' : '\u2714'}
      />
    </div>
  </li>
)

export default Item
