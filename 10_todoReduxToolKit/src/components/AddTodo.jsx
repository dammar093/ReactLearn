import React, { useState } from 'react'
import {addTodo} from '../Features/Todo/todoSlice'
import {useDispatch} from 'react-redux'
const AddTodo = () => {
  const [input ,setInput] = useState('')
  const dispatch = useDispatch()

  const handelSubmit = (e) =>{
   e.preventDefault()
   dispatch(addTodo(input))
   setInput('')
  }
  return (
    <div>
        <form onSubmit={handelSubmit}>
          <input type="text" 
            value={input}
            placeholder='Enter todo'
            onChange={(e)=>setInput(e.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo