import { Router } from 'express'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from '../controllers/todo.controllers'

const todoRouter = Router()

todoRouter.get('/', getTodos)
todoRouter.post('/', createTodo)
todoRouter.put('/:id', updateTodo)
todoRouter.delete('/:id', deleteTodo)

export default todoRouter
