import { ITodo } from "./todo"
import { useEffect, useState } from "react"
import TodoList from "./components/TodosList"
import { useQuery } from "@tanstack/react-query"
import { fetchTodosList } from "./apis/todos.api"

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const todo= useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodosList(),
    refetchOnWindowFocus: false,
  })
  
  useEffect(() =>{
    if (todo.data) {
      setTodos(todo.data);
    }
  }, [todo.data])

  return (
    <main className="container mx-auto my-4">
      <h1 className="text-center text-3xl font-bold">Todo List Application</h1>
      <TodoList todos={todos}/>
    </main>
  )
}
export default App