import React, { useState } from 'react'

const InputTodo = ({ addTodoProps }) => {
  const [state, setState] = useState({ title: '' })

  const onChange = (event) => {
    return setState({
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    addTodoProps(state.title)
    setState({
      title: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        name="title"
        onChange={onChange}
        placeholder="Add Todo..."
        type="text"
        value={state.title}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  )
}

export default InputTodo
