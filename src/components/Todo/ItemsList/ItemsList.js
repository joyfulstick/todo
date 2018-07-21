import React, { Component } from 'react'
import Item from './Item/Item'
import classes from './ItemsList.css'

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
      props: { title, clicked, dragged, status },
      state: { tasks },
    } = this
    return (
      <section
        className={classes.section}
        onDragEnter={dragged}
        status={status}
      >
        <h2 className={classes.title}>
          {status === 'done' ? 'Done' : 'To Do'}
        </h2>
        <ul className={classes.list}>
          {tasks.length !== 0 ? (
            tasks.map((el, i) => (
              <Item
                key={el.id}
                title={title}
                id={el.id}
                status={el.status}
                dragStarted={e => this.handleDragStart(e, i)}
                dragEnter={e => this.handleDragEnter(e, i)}
                clicked={clicked}
                btnType={status === 'done' ? '\u27F2' : '\u2714'}
                name={el.name}
              />
            ))
          ) : (
            <p className={classes.nothing}>Nothing {title}</p>
          )}
        </ul>
      </section>
    )
  }
}

export default ItemsList
