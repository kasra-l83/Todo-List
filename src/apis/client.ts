import axios from "axios"

export const generateClient= () =>{
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
  })
}