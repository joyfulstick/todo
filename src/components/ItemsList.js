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
    }
  }

  handleDragStart = (e, draggedIndex) => {
    this.setState({ draggedIndex })
  }

  handleDragEnter = (e, enteredIndex) => {
    // let status = ''
    // if (title === 'To Do') {
    //   status = 'todo'
    // } else if (title === 'Done') {
    //   status === 'done'
    // }
    console.log(enteredIndex)
    this.setState(prevState => {
      // if (prevState.draggedIndex === enteredIndex) return
      const tasks = [...prevState.tasks]
      const swapTask = tasks.splice(prevState.draggedIndex, 1)
      tasks.splice(enteredIndex, 0, ...swapTask)
      console.log(tasks)
      return { tasks, draggedIndex: enteredIndex }
    })
  }

  render() {
    const {
      props: { title, list, dragStarted, dragEnter, ...rest },
      state: { tasks },
    } = this
    return (
      <section className="section">
        <h2 className="title">{title}</h2>
        <ul className={`'list' ${title === 'Done' ? 'lined' : ''}`}>
          {tasks.length !== 0 ? (
            tasks.map((el, i) => (
              <Item
                key={el.id}
                dragStarted={e => this.handleDragStart(e, i)}
                dragEnter={e => this.handleDragEnter(e, i)}
              >
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
  }
}

export default ItemsList
