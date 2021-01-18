import React, { useState, useEffect } from 'react'

import TodosList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'

import { getTodosFromApi, deleteFromApi, addTodoToApi } from '../services/api'

export const TodoContainer = () => {
  const [todos, setTodos] = useState([{ id: 0, title: '', completed: false }])

  /**
   * Get 10 todo items from API when component is mounted
   */
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodosFromApi();
      setTodos(todos)
    };
    fetchTodos();
  }, [])

  // TODO if possible test with REACT testing library integration test
  const onChangeHandle = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo;
      }
    }));
  }

  const deleteItem = async (id) => {
    await deleteFromApi(id);
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const addTodoItem = async (title) => {
    const updatedTodo = { id: 11, title, completed: false };
    await addTodoToApi(updatedTodo)
    console.log(updatedTodo)
    setTodos([...todos, updatedTodo])
  }

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoItemFunction={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={onChangeHandle}
        deleteTodoProps={deleteItem}
      />
    </div>
  )
}
