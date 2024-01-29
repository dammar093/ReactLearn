import React, { useState } from 'react'
import { useTodo } from '../context/todoContext';
import './TodoForm.css'

const TodoForm = () => {

  const [todo,setTodo] = useState('');

  const {addTodo} = useTodo();

  const submitTodo = (e) =>{
    e.preventDefault()
    addTodo({todo:todo,completed:false})
    setTodo('')
  }
  return (
      <>
         <form onSubmit={submitTodo}>
          <input type="text"
           placeholder='Enter your todo'
           value={todo}
           onChange={(e)=>setTodo(e.target.value)}
          />
          <button type='submit'>Add</button>
         </form>
      </>
  )
}

export default TodoForm