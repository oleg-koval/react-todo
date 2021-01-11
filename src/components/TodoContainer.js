import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodosList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'

export const TodoContainer = () => {
  const [state, setState] = useState({
    data: {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: true,
        },
      ],
    },
  })

  const onChangeHandle = (id) => {
    return setState({
      data: {
        todos: state.data.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        }),
      },
    })
  }

  const deleteTodo = (id) => {
    return setState({
      data: {
        todos: state.data.todos.filter((todo) => {
          return todo.id !== id
        }),
      },
    })
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }

    return setState({
      data: {
        todos: [...state.data.todos, newTodo],
      },
    })
  }

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={state.data.todos}
        handleChangeProps={onChangeHandle}
        deleteTodoProps={deleteTodo}
      />
    </div>
  )
}
