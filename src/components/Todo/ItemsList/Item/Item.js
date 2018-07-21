import Button from '../../Button/Button'
import ItemContent from './ItemContent/ItemContent'
import React from 'react'
import classes from './Item.css'

const Item = props => (
  <li
    draggable
    className={classes.item}
    onDragStart={props.dragStarted}
    onDragEnter={props.dragEnter}
    id={props.id}
    status={props.status}
  >
    <div className={classes.container} status={props.status} id={props.id}>
      <ItemContent status={props.status}>{props.name}</ItemContent>
      <Button id={props.id} clicked={props.clicked} status={props.status} />
    </div>
  </li>
)

export default Item
