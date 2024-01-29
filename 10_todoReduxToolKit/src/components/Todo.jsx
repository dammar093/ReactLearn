import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {editTodo, removeTodo} from '../Features/Todo/todoSlice'


const Todo = () => {
  const todos = useSelector(state=>state.todos)
  const dispatch = useDispatch()

  return (
    <div>
       <h2>Todos</h2>
       {
        todos.map((todo)=>(
        <li key={todo.id}>{todo.text} <button onClick={handdelEdit}>Edit</button><button onClick={()=>(dispatch(removeTodo(todo.id)))}>Delete</button></li>
        ))
       }
    </div>
  )
}

export default Todo