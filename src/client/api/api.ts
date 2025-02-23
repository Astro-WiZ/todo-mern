import axios from 'axios'
import { Todo } from '../types/todo.types'

const API_URL = 'http://localhost:3000/api/todos'

export const GetTodos = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export const AddTodo = async (title: string): Promise<Todo> => {
  const response = await axios.post(API_URL, { title })
  return response.data
}

export const UpdateTodo = async (id: string, completed: boolean): Promise<Todo> => {
  const response = await axios.put(`${API_URL}/${id}`, { completed, id })
  return response.data
}

export const DeleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`)
}
