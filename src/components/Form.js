import './Form.css'
import Input from './Input'
import React from 'react'

const Form = props => (
  <form className="form" onSubmit={props.added}>
    <Input
      type="text"
      placeholder="Add new task"
      value={props.value}
      changed={props.changed}
    />
    <Input type="submit" value="+" disabled={props.value.trim() === ''} />
  </form>
)

export default Form
