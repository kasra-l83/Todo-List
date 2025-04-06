import { ITodo } from "../todo"
import TodoCard from "./TodoCard"

interface TodoListProps {
  todos: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) =>{
  return (
    <section className="space-y-2 max-w-[800px] mx-auto mt-5">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo}/>
      ))}
    </section>
  )
}
export default TodoList