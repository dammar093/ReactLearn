import { useState } from 'react'
import './App.css'
import { TodoProvider, useTodo } from './context/todoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  const [todos,setTodos] = useState([])
  //function for add todo
  const addTodo = (todo) =>{
     setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    //console.log(todos);
  }

  const deleteToto = (id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id !== id))
    console.log(todos);
  }
  
  const editTodo = (id,todo) =>{
     
  }
  
  const toggleTodo = (id) =>{

  }

  return (
    <TodoProvider value={{todos,addTodo,deleteToto,editTodo,toggleTodo}}>
      <h1>Todo</h1>
      <TodoForm/>
      {
        todos.map((todo)=>(
          <div key={todo.id}>
             <TodoItem todo={todo}/>
          </div>
        ))
      }
    </TodoProvider>
  )
}

export default App
