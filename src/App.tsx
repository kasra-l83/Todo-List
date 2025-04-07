import type { ITodo } from "./todo"
import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodosList"
import { useQuery } from "@tanstack/react-query"
import { fetchTodosList } from "./apis/todos.api"
import { TodoCardSkeleton } from "./components/TodoCard"

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
  const addHandler= (newTodo: ITodo) =>{
    setTodos([ newTodo, ...todos ])
  }
  const editHandler= (id: number, newTitle: string) =>{
    setTodos(todos.map(todo => 
      todo.id=== id ? { ...todo, title: newTitle } : todo
    ))
  }
  
  useEffect(() =>{
    if (todo.data) {
      setTodos(todo.data);
    }
  }, [todo.data])

  return (
    <main className="container mx-auto my-4 max-w-[800px] space-y-5 px-5 md:px-0">
      <h1 className="text-center text-3xl font-bold">Todo List Application</h1>
      <TodoForm todos={todos} add={addHandler}/>
      {todo.isSuccess ? (
        <TodoList todos={todos} onDelete={deleteHandler} complete={completeHandler} edit={editHandler}/>
      ) : (
        <>
          {
            [...Array(10)].map((_, index) =>(
              <TodoCardSkeleton key={index}/>
            ))
          }
        </>
      )}
    </main>
  )
}
export default App