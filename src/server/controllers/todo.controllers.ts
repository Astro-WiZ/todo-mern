import { Request, Response } from 'express'
import Todo, { ITodo } from '../models/todo.models'

export const getTodos = async (_req: Request, res: Response) => {
  const todos: ITodo[] = await Todo.find()
  res.json(todos)
}

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body
    const newTodo = new Todo({ title })
    newTodo.save()
    res.status(201).json(newTodo)
  } catch (error) {
    console.error(error)
  }
}

export const updateTodo = async (req: Request, res: Response) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.json(updatedTodo)
}

export const deleteTodo = async (req: Request, res: Response) => {
  await Todo.findByIdAndDelete(req.params.id)
  res.json({ message: 'Todo Deleted Successfully' })
}
