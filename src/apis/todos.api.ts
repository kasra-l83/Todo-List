import { urls } from "./urls"
import { generateClient } from "./client"

export const fetchTodosList= async () =>{
  const client= generateClient();
  const response= await client.get(urls.todos.list);
  return response.data;
}