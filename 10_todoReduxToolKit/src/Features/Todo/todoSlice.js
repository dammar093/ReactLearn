import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos:[
    {
      id:1,
      text:"Hello world"
    }
  ],
  
}

export const todoSlice = createSlice(
  {
    name : "todo",
    initialState,
    reducers :{
      addTodo : (state,action)=>{
        const todo ={
          id : nanoid(),
          text : action.payload
        }
        state.todos.push(todo)
      },
      removeTodo : (state,action)=>{
        state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
      },
      editTodo: (state, action) => {
        const { id, ...updatedTodo } = action.payload;
        const todoIndex = state.todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            state.todos[todoIndex] = { ...state.todos[todoIndex], ...updatedTodo };
        }
     }
    
    }
  }
)

export const {addTodo , removeTodo ,editTodo} = todoSlice.actions

export default todoSlice.reducer