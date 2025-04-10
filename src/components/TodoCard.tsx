import type { ITodo } from "../todo"
import React, { useState } from "react"
import { CgClose } from "react-icons/cg"
import { FaCheck } from "react-icons/fa6"
import { FiTrash, FiEdit2 } from "react-icons/fi"

interface TodoCardProps {
  todo: ITodo
  onDelete: (id: number) => void
  complete: (id: number) => void
  onEdit: (id: number, newTitle: string) => void
}

export const TodoCardSkeleton: React.FC= () =>{
  return(
    <div className="p-3 rounded-lg border flex justify-between">
      <span className="flex items-center w-1/2 gap-x-3">
        <div className="size-5 bg-gray-100 rounded-sm"></div>
        <div className="h-6 rounded bg-gray-100 w-full"></div>
      </span>
      <span className="flex gap-x-2">
        <div className="rounded bg-gray-100 size-8"></div>
        <div className="rounded bg-gray-100 size-8"></div>
      </span>
    </div>
  )
}
export const TodoCard: React.FC<TodoCardProps> = ({ todo, onDelete, complete, onEdit }) =>{
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(todo.title);

  const editHandler= () =>{
    if (edit) onEdit(todo.id, title);
    setEdit(!edit);
  }
  const cancel= () =>{
    setTitle(todo.title);
    setEdit(false);
  }
  
  return (
    <div className={`flex items-center justify-between p-3 border rounded-lg ${todo.completed ? "bg-gray-100" : ""}`}>
      <span className="flex items-center gap-x-3 w-full">
        <input type="checkbox" checked={todo.completed} onChange={() => complete(todo.id)} className="size-4 cursor-pointer accent-gray-500"/>
        {edit ? (
          <input type="text" placeholder="Add a new title..." value={title} onChange={(event) => setTitle(event.target.value)}
            className="border w-full px-4 py-1 mr-3 rounded-lg text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        ) : (
          <h3 className={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</h3>
        )}
      </span>
      {edit ? (
        <span className="flex">
          <button className="rounded p-2 hover:bg-gray-200" onClick={cancel}>
            <CgClose/>
          </button>
          <button className="rounded p-2 hover:bg-gray-200" onClick={editHandler}>
            <FaCheck/>
          </button>
        </span>
      ) : (
        <span className="flex">
          <button className="rounded p-2 hover:bg-gray-200" onClick={() => setEdit(true)}>
            <FiEdit2/>
          </button>
          <button className="rounded p-2 hover:bg-gray-200" onClick={() => onDelete(todo.id)}>
            <FiTrash/>
          </button>
        </span>
      )}
    </div>
  )
}