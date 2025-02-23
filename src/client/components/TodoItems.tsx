import { Todo } from '../types/todo.types'
import { Button, Checkbox, List, Typography } from 'antd'

interface Props {
  todo: Todo
  onToggle: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <List.Item
      actions={[
        <Button key="delete-btn" danger onClick={() => onDelete(todo._id)} size="small">
          Delete
        </Button>,
      ]}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo._id, !todo.completed)}
      />
      <Typography.Text delete={todo.completed} style={{ margin: 10 }}>
        {todo.title}
      </Typography.Text>
    </List.Item>
  )
}
