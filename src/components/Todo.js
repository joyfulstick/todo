import React, { Component } from 'react'
import ItemsList from './ItemsList'
import Form from './Form'
import './Todo.css'

class Todo extends Component {
  state = {
    tasks: [],
    inputValue: '',
    id: 0,
  }

  handleGetInputValue = e => this.setState({ inputValue: e.target.value })

  handleAddTaks = e => {
    e.preventDefault()
    this.setState(prevState => {
      const task = {
          id: Date.now(),
          name: prevState.inputValue,
          status: 'todo',
        },
        tasks = [...prevState.tasks]
      tasks.unshift(task)
      return { tasks, inputValue: '' }
    })
  }

  toggleStatus = status => {
    if (status === 'todo') {
      status = 'done'
    } else if (status === 'done') {
      status = 'todo'
    }
    return status
  }

  handleDragStatus = e => {
    const status = e.currentTarget.getAttribute('status')
    this.setState(prevState => {
      const { id } = prevState
      const tasks = [...prevState.tasks]
      const task = tasks.find(el => el.id === +id)
      if (task.status === status) return
      task.status = this.toggleStatus(task.status)
      return { tasks }
    })
  }

  handleClickStatus = e => {
    const { id } = e.target
    this.setState(prevState => {
      const tasks = [...prevState.tasks]
      const task = tasks.find(el => el.id === +id)
      task.status = this.toggleStatus(task.status)
      return { tasks }
    })
  }

  setId = e => {
    const { id } = e.target
    this.setState({ id })
  }

  render() {
    const {
      state: { tasks, inputValue },
      handleGetInputValue,
      handleAddTaks,
      handleClickStatus,
      handleDragStatus,
      setId,
    } = this
    const taksFilter = st => tasks.filter(el => el.status === st)
    const lists = ['todo', 'done']
    return (
      <article className="article">
        <Form
          value={inputValue}
          changed={handleGetInputValue}
          added={handleAddTaks}
        />
        {lists.map(list => (
          <ItemsList
            key={list}
            list={taksFilter(list)}
            clicked={handleClickStatus}
            dragged={handleDragStatus}
            status={list}
            setId={setId}
          />
        ))}
      </article>
    )
  }
}

export default Todo
