import mongoose, { Schema, Document } from 'mongoose'

export interface ITodo extends Document {
  title: string
  completed: boolean
}

const TodoSchema = new Schema<ITodo>({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const Todo = mongoose.model<ITodo>('Todo', TodoSchema)

export default Todo
