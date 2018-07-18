import React from 'react'
import Item from './Item'
import Button from './Button'
import ItemContent from './ItemContent'
import './ItemsList.css'

const ItemsList = ({ title, list, ...rest }) => (
  <section className="section">
    <h2 className="title">{title}</h2>
    <ul className={`'list' ${title === 'Done' ? 'lined' : ''}`}>
      {list.length !== 0 ? (
        list.map(el => (
          <Item key={el.id}>
            <ItemContent>{el.name}</ItemContent>
            <Button id={el.id} {...rest} />
          </Item>
        ))
      ) : (
        <p className="nothing">Nothing {title}</p>
      )}
    </ul>
  </section>
)

export default ItemsList
