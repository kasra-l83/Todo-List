import type { ITodo } from "../todo"
import TodoCard from "./TodoCard"

interface TodoListProps {
  todos: ITodo[]
  onDelete: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) =>{
  return (
    <section className="space-y-2 max-w-[800px] mx-auto mt-5">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onDelete={onDelete}/>
      ))}
    </section>
  )
}
export default TodoList