import React from 'react'
import Input from './Input'
import './Form.css'

const Form = props => (
  <form className="form" onSubmit={props.added}>
    <Input
      type="text"
      placeholder="Add new task"
      value={props.value}
      changed={props.changed}
    />
    <Input type="submit" value="+" disabled={props.value.length === 0} />
  </form>
)

export default Form
