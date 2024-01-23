import React, { useEffect, useState } from 'react'
import './App.css'


const App = () => {
  const [todos,setTodos] = useState([])

  const [todo,setTodo] = useState('')
  

   useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todo"))
      setTodos(todos)
    
   },[])

    useEffect(()=>{
      localStorage.setItem("todo",JSON.stringify(todos))
    },[todos])


   const handelSubmit = (e) =>{
     e.preventDefault();
     if(todo.trim().length >0){
      setTodos((prev)=>[...prev,todo]);
     }
     setTodo('')
  }


  const deleteTodo = (id) =>{
     const filtredTodo = todos.filter((value) => {
      console.log(id);
      console.log(value)
      return value !== todos[id];
    });
    setTodos(filtredTodo)
  }
  return (
    <>
      <div className="wrapper">
        <h2>TODO APP</h2>
      <form onSubmit={handelSubmit}>
        
        <div className="input">
          <input type="text" 
            placeholder="Enter your work"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      <div className='todos'>
        <ul>
           {
            todos.map((todo,index)=>(
              <li key={todo}>{todo}  <button onClick={()=>deleteTodo(index)}>❌</button></li>
            ))
           }
        </ul>
      </div>
      </div>
    </>
  )
}

export default App