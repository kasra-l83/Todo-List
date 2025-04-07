import type { ITodo } from "./todo"
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

  const deleteHandler= (id: number) =>{
    setTodos(todos.filter(todo => todo.id!== id));
  }
  const completeHandler= (id: number) =>{
    setTodos(todos.map(todo => 
      todo.id=== id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  
  useEffect(() =>{
    if (todo.data) {
      setTodos(todo.data);
    }
  }, [todo.data])

  return (
    <main className="container mx-auto my-4">
      <h1 className="text-center text-3xl font-bold">Todo List Application</h1>
      <TodoList todos={todos} onDelete={deleteHandler} complete={completeHandler}/>
    </main>
  )
}
export default App