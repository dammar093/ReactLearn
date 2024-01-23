import React, { useState } from 'react'

const Counter = () => {
const [count,setCount]=useState(0);

let increment = () =>{
  if(count <10){
    count=count+1
    setCount(count)
  }
}
let decrement = () =>{

  if(count >0){
    count = count -1
    setCount(count)
  }

}
  return (
<div>
  <h2>Count: {count}</h2>
  <button onClick={increment}>Add</button>
  <button onClick={decrement}>Remove</button>
</div>
  )
}

export default Counter