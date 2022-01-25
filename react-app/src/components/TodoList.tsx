import React from "react"
import './TodoList.css'

interface TodoListProps {
  items: {id: string, text: string}[]
  deleteTodoHandler: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodoHandler }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={deleteTodoHandler.bind(null, item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
