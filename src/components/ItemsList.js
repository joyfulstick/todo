import React from 'react'
import Item from './Item'
import Button from './Button'
import ItemContent from './ItemContent'
import './ItemsList.css'

const ItemsList = props => (
  <section className="section">
    <h2>{props.title}</h2>
    <ul className="list">
      {props.list.length !== 0 ? (
        props.list.map(el => (
          <Item key={el.id}>
            <ItemContent className="task">{el.name}</ItemContent>
            <Button changed={props.changed} id={el.id}>
              {props.btnType}
            </Button>
          </Item>
        ))
      ) : (
        <Item>Nothing {props.title}</Item>
      )}
    </ul>
  </section>
)

export default ItemsList
