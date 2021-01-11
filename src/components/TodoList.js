import TodoItem from './TodoItem'

const TodosList = ({ todos, handleChangeProps, deleteTodoProps }) => {
  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      handleChangeProps={handleChangeProps}
      deleteTodoProps={deleteTodoProps}
    />
  ))
}

export default TodosList
