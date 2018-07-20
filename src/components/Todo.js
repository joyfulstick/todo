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

  handleChangeStatus = e => {
    const status = e.currentTarget.getAttribute('status')

    this.setState(prevState => {
      const { id } = prevState
      const tasks = [...prevState.tasks]
      const task = tasks.find(el => el.id === +id)
      if (task.status !== status) {
        if (task.status === 'todo') {
          task.status = 'done'
        } else if (task.status === 'done') {
          task.status = 'todo'
        }
      }
      return { tasks }
    })
  }

  handleToggleStatus = e => {
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

  setId = e => {
    const { id } = e.target
    this.setState({ id })
  }

  render() {
    const {
      state: { tasks, inputValue },
      handleGetInputValue,
      handleAddTaks,
      handleToggleStatus,
      handleChangeStatus,
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
            toggled={handleToggleStatus}
            changed={handleChangeStatus}
            status={list}
            setId={setId}
          />
        ))}
      </article>
    )
  }
}

export default Todo
