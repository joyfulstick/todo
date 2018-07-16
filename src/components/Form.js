import React from 'react'
import Input from './Input'

const Form = props => (
  <form onSubmit={props.added}>
    <Input
      type="text"
      placeholder="Add new task"
      value={props.value}
      changed={props.changed}
    />
    <Input type="submit" value="Add" disabled={props.value.length === 0} />
  </form>
)

export default Form
