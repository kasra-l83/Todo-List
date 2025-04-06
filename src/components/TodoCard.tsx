import { ITodo } from "../todo"
import { FiTrash, FiEdit2 } from "react-icons/fi"

interface TodoCardProps {
  todo: ITodo
}
  
const TodoCard: React.FC<TodoCardProps> = ({ todo }) =>{
  return (
    <div className={`flex items-center justify-between p-3 border rounded-lg ${todo.completed ? "bg-gray-100" : ""}`}>
      <span className="flex items-center gap-x-3">
        <input type="checkbox" className="size-4 cursor-pointer"/>
        <h3 className={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</h3>
      </span>
      <span className="flex">
        <button className="rounded p-2 hover:bg-gray-200">
          <FiEdit2/>
        </button>
        <button className="rounded p-2 hover:bg-gray-200">
          <FiTrash/>
        </button>
      </span>
    </div>
  )
}
export default TodoCard