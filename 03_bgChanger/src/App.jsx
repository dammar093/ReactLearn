import React, { useState } from 'react'

const App = () => {
  const [color,setColor]=useState('purple')

  return (
    <div style={{width:'100%',height:'100vh',backgroundColor:color}}>
      <div style={{display:'flex',justifyContent:'center',marginTop:0,backgroundColor:'white',padding:10}}>
        <button 
        style={{backgroundColor:'red',color:'white'}}
        onClick={()=>setColor('red')}
        >Red</button>
        <button 
        style={{backgroundColor:'green',color:'white'}}
        onClick={()=>setColor('green')}
        >Green</button>
        <button 
        style={{backgroundColor:'yellow',color:'white'}}
        onClick={()=>setColor('yellow')}
        >Yellow</button>
        <button 
        style={{backgroundColor:'pink',color:'white'}}
        onClick={()=>setColor('pink')}
        >Pink</button>
        <button 
        style={{backgroundColor:'blue',color:'white'}}
        onClick={()=>setColor('blue')}
        >Blue</button>
      </div>
    </div>
  )
}

export default App