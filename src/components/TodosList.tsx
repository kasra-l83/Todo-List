import TodoCard from "./TodoCard"
import type { ITodo } from "../todo"

interface TodoListProps {
  todos: ITodo[]
  onDelete: (id: number) => void
  complete: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, complete }) =>{
  return (
    <section className="space-y-2 max-w-[800px] mx-auto mt-5">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onDelete={onDelete} complete={complete}/>
      ))}
    </section>
  )
}
export default TodoList