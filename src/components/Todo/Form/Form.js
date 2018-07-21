import Input from './Input/Input'
import React from 'react'
import classes from './Form.css'

const Form = props => (
  <form className={classes.form} onSubmit={props.added}>
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
