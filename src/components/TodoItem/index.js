import './index.css'

const TodoItem = props => {
  const {id, title, deleteTodo} = props
  const todoDeletion = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item-container">
      <h1 className="titleHeading">{title}</h1>
      <button className="btn" type="button" key={id} onClick={todoDeletion}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
