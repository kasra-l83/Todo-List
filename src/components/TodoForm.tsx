import { useState } from "react"
import type { ITodo } from "../todo"

interface TodoFormProps {
  todos: ITodo[]
  add: (newTodo: ITodo) => void
}

export default function TodoForm({todos, add }: TodoFormProps) {
  const [title, setTitle] = useState<string>("");
  const ids= [...new Set(todos.map(todo => todo.id))]
  const max= ids.length> 0 ? Math.max(...ids) : 1;
  const userIds= [...new Set(todos.map(todo => todo.userId))]

  const submit= (event: React.FormEvent) =>{
    event.preventDefault();
    const newTodo: ITodo= {
      id: ids.length> 0 ? max+ 1 : 1,
      title: title,
      completed: false,
      userId: userIds.length> 0 ? userIds[Math.floor(Math.random()* userIds.length)] : 1
    }
    add(newTodo)
    setTitle("")
  }

  return (
    <form onSubmit={submit} className="flex gap-x-2">
      <input required type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Add a new todo..."
        className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Add</button>
    </form>
  )
}