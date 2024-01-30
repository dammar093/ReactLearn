import React, { useState } from 'react'
import { useTodo } from '../context/todoContext'
import './TodoItem.css'

const TodoItem = ({todo}) => {

  const {deleteToto,editTodo,toggleTodo}  = useTodo()
  const [isTodoEditable,setIsTodoEditable] = useState(false)
  const [newTodo,setNewTodo] = useState(todo.todo)
  const handelTodo = (e)=>{
    e.preventDefault();
  }

  const updateTodo = () =>{
    editTodo(todo.id,{...todo,todo:newTodo})
  }
  const toggleCopleted = () =>{
     toggleTodo(todo.id)
  }
  return (
    <>
       <form onSubmit={handelTodo}>
        <div className='todoItem'> <input type="checkbox" 
          checked={todo.completed}
          onChange={toggleCopleted}
          v
        />
           <input  type="text" 
           value={todo.todo}
           onChange={(e)=>setNewTodo(e.target.value)}
            readOnly={!isTodoEditable}
            style={todo.completed ? {textDecoration:'lineThrough'} : {textDecoration:'none'}}
          /> 
          <button 
        
           onClick={()=>{
            if(isTodoEditable){
              updateTodo()
              setIsTodoEditable((prev)=>!prev)
            }
            else{
              setIsTodoEditable((prev)=>!prev)
            }
           }}
           disabled={todo.completed}
          >
            { isTodoEditable ? '✏️' :'🗃️'}
          </button>
          <button onClick={()=>deleteToto(todo.id)}>❌</button>
        </div>
       </form>
    </>
  )
}

export default TodoItem