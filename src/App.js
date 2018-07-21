import React, { Component } from 'react'
import Todo from './components/Todo/Todo'
import classes from './App.css'

class App extends Component {
  render() {
    return (
      <main className={classes.main}>
        <Todo />
      </main>
    )
  }
}

export default App
