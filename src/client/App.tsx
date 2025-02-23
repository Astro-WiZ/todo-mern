import { useEffect, useState } from 'react'
import { Todo } from './types/todo.types'
import { GetTodos, AddTodo, UpdateTodo, DeleteTodo } from './api/api'
import { TodoItem } from './components/TodoItems'
import { Input, Button, List, Typography, Space } from 'antd'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const data = await GetTodos()
    setTodos(data)
  }

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      const todo = await AddTodo(newTodo)
      setTodos([...todos, todo])
      setNewTodo('')
    }
  }

  const handleToggleTodo = async (id: string, completed: boolean) => {
    await UpdateTodo(id, completed)
    setTodos(todos.map(todo => (todo._id === id ? { ...todo, completed } : todo)))
  }

  const handleDeleteTodo = async (id: string) => {
    await DeleteTodo(id)
    setTodos(todos.filter(todo => todo._id !== id))
  }

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
      <Typography.Title level={2}>Todo App</Typography.Title>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <Button type="primary" onClick={handleAddTodo}>
          Add
        </Button>
      </Space.Compact>

      <List
        style={{ marginTop: 20 }}
        bordered
        dataSource={todos}
        renderItem={todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        )}
      />
    </div>
  )
}

export default App
