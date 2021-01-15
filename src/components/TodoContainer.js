import axios from 'axios'
import React, { useState, useEffect } from 'react'

import TodosList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'

export const TodoContainer = () => {
  const [state, setState] = useState({
    data: {
      todos: [],
    },
  })

  // TODO if possible test with REACT testing library integration test
  const onChangeHandle = (id) => {
    setState({
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

  const deleteItem = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

    setState({
      data: {
        todos: [
          ...state.data.todos.filter((todo) => {
            return todo.id !== id
          }),
        ],
      },
    })
  }

  const addTodoItem = async (title) => {
    const { data } = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: title,
        completed: false,
      },
    )

    setState({
      data: {
        todos: [
          ...state.data.todos,
          {
            ...data,
            userId: 1,
            id: 11,
          },
        ],
      },
    })
  }

  /**
   * Get 10 todo items from API when component is mounted
   */
  useEffect(() => {
    async function getTodosFromApi() {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            _limit: 10,
          },
        },
      )

      setState({
        data: {
          todos: data,
        },
      })
    }

    getTodosFromApi()
  }, [])

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoItemFunction={addTodoItem} />
      <TodosList
        todos={state.data.todos}
        handleChangeProps={onChangeHandle}
        deleteTodoProps={deleteItem}
      />
    </div>
  )
}
