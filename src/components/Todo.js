import React, { Component, Fragment } from 'react'
import ItemsList from './ItemsList'
import Form from './Form'
import './Todo.css'

class Todo extends Component {
  state = {
    tasks: [],
    inputValue: '',
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

  handleChangeStatus = e => {
    const { id } = e.target
    this.setState(prevState => {
      const tasks = [...prevState.tasks]
      const task = tasks.find(el => el.id === +id)
      if (task.status === 'todo') {
        task.status = 'done'
      } else if (task.status === 'done') {
        task.status = 'todo'
      }
      return { tasks }
    })
  }

  render() {
    const {
      state: { tasks, inputValue },
      handleGetInputValue,
      handleAddTaks,
      handleChangeStatus,
    } = this
    const taksFilter = st => tasks.filter(el => el.status === st)
    return (
      <article className="article">
        <Form
          value={inputValue}
          changed={handleGetInputValue}
          added={handleAddTaks}
        />
        <ItemsList
          title="To do"
          list={taksFilter('todo')}
          btnType={'done'}
          changed={handleChangeStatus}
        />
        <ItemsList
          title="Done"
          list={taksFilter('done')}
          btnType={'todo'}
          changed={handleChangeStatus}
        />
      </article>
    )
  }
}

export default Todo
