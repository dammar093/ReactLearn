import React from 'react'
import { useTodo } from '../context/todoContext'
import './TodoItem.css'

const TodoItem = ({todo}) => {

  const {deleteToto}  = useTodo()

  const handelTodo = (e)=>{
    e.preventDefault();
  }
  return (
    <>
       <form onSubmit={handelTodo}>
        <p> <input type="checkbox" /> <span className='todo'>{todo.todo}  </span><input type="text" className='showInput'/><span>🗃️</span> <span onClick={()=>deleteToto(todo.id)}>❌</span></p>
       </form>
    </>
  )
}

export default TodoItem