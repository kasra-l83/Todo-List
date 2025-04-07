import TodoCard from "./TodoCard"
import type { ITodo } from "../todo"

interface TodoListProps {
  todos: ITodo[]
  onDelete: (id: number) => void
  complete: (id: number) => void
  edit: (id: number, newTitle: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, complete, edit }) =>{
  return (
    <section className="space-y-2">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onDelete={onDelete} complete={complete} onEdit={edit}/>
      ))}
    </section>
  )
}
export default TodoList