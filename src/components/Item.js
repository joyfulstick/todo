import React from 'react'
import './Item.css'

const Item = props => (
  <li className="item">
    <div className="container">{props.children}</div>
  </li>
)

export default Item
