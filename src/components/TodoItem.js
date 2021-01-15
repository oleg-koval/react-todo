// TODO: CSS in js emotion lib ,  styled components

const completedStyle = {
  fontStyle: 'italic',
  color: '#d35e0f',
  opacity: 0.4,
  textDecoration: 'line-through',
}

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => {
  const { title, completed, id } = todo
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        onChange={() => {
          handleChangeProps(id)
        }}
        defaultChecked={completed}
      />
      <span style={completed === true ? completedStyle : null}>{title}</span>
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
    </li>
  )
}

export default TodoItem
