import React from 'react'
import Item from './Item'
import Button from './Button'

const ItemsList = props => (
  <section>
    <h2>{props.title}</h2>
    <ul>
      {props.list.length !== 0 ? (
        props.list.map(el => (
          <Item key={el.id}>
            {el.name}
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
