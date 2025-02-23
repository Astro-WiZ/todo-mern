import express, { Router } from 'express'
import { configDotenv } from 'dotenv'
import connectDb from './config/db'
import todoRouter from './routes/todo.routes'

const app = express()
const apiRouter = Router()
configDotenv()

const URL = process.env.MONGODB_URI as string
connectDb(URL)

app.use(express.urlencoded())
app.use(express.json())

apiRouter.get('/hello', (_req, res) => {
  res.json({ message: 'Hello world' })
})
// NOTE: make sure all the server route starts with /api
app.use('/api', apiRouter)
app.use('/api/todos', todoRouter)

export default app
