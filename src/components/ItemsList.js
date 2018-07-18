import React, { Component } from 'react'
import Item from './Item'
import Button from './Button'
import ItemContent from './ItemContent'
import './ItemsList.css'

class ItemsList extends Component {
  state = {
    tasks: [],
    draggedIndex: -1,
  }

  static getDerivedStateFromProps(props, state) {
    if (state.tasks.length !== props.list.length) {
      return { tasks: props.list }
    } else {
      return null
    }
  }

  handleDragStart = (e, draggedIndex) => {
    this.props.setId(e)
    this.setState({ draggedIndex })
  }

  handleDragEnter = (e, enteredIndex) => {
    this.setState(prevState => {
      const tasks = [...prevState.tasks]
      const swapTask = tasks.splice(prevState.draggedIndex, 1)
      tasks.splice(enteredIndex, 0, ...swapTask)
      return { tasks, draggedIndex: enteredIndex }
    })
  }

  render() {
    const {
      props: { title, toggled, changed, btnType, status },
      state: { tasks },
    } = this
    return (
      <section className="section" onDragEnter={changed} status={status}>
        <h2 className="title">{title}</h2>
        <ul className={`'list' ${title === 'Done' ? 'lined' : ''}`}>
          {tasks.length !== 0 ? (
            tasks.map((el, i) => (
              <Item
                key={el.id}
                title={title}
                id={el.id}
                status={el.status}
                dragStarted={e => this.handleDragStart(e, i)}
                dragEnter={e => this.handleDragEnter(e, i)}
              >
                <ItemContent>{el.name}</ItemContent>
                <Button id={el.id} toggled={toggled} btnType={btnType} />
              </Item>
            ))
          ) : (
            <p className="nothing">Nothing {title}</p>
          )}
        </ul>
      </section>
    )
  }
}

export default ItemsList
