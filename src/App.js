import React, { Component } from 'react'
import Todo from './components/Todo'
import './App.css'

class App extends Component {
  render() {
    return (
      <main className="main">
        <Todo />
      </main>
    )
  }
}

export default App
