import { createContext ,useContext ,Provider} from 'react'
//create TodoContex and declare the initial state
export const TodoContext = createContext({
  todos:[
    {
      id:1,
      todo:'hello world',
      completed:false
    }
  ],
  addTodo : ()=>{},
  deleteToto: ()=>{},
  editTodo: ()=>{},
  toggleTodo:()=>{}
});

export const useTodo=()=>{
  
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider