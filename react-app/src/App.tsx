import React, { useState } from 'react'
import { Todo } from './todo.model'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    // setTodos([...todos, {id: Math.random().toString(), text}]) // better to use below
    setTodos(prevTodos => [
      ...prevTodos, 
      {id: Math.random().toString(), text}
    ])
  }

  const deleteTodoHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} deleteTodoHandler={deleteTodoHandler} />
    </div>
  )
}

export default App
