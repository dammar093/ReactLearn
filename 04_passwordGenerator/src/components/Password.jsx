import React, { useCallback, useEffect, useRef, useState } from 'react'

const Password = () => {

  const [length,setLength]=useState(8)
  const [includeNumber,setIncludeNumber] = useState(false)
  const [includeChar,setIncludeChar] = useState(false)
  const [password,setPassword]= useState('')

  const passwordGenrator= useCallback(()=>{
    let pass='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
     if(includeNumber) str+= '0123456789';
     if(includeChar) str+='!@#$%&?';

     for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      
      pass+=str.charAt(char);
     }
     setPassword(pass)
  },[length,includeNumber,includeChar,setPassword])
  const passwordRef=useRef(null)

  useEffect(()=>{
    passwordGenrator()
  },[length,includeNumber,includeChar,passwordGenrator])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    alert('copied')
  },[password])
  return (
    <div style={{width:400,height:200,margin:'auto',backgroundColor:'purple',display:'flex',alignItems:'center',flexDirection:'column'}}>
    <h2 style={{color:'white'}}>Password Generator</h2>
    <div>
      <input type="text" 
      readOnly
      style={{width:250}}
      value={password}
      ref={passwordRef}

      />
      <button style={{backgroundColor:'blue',color:'white',cursor:'pointer'}}
      onClick={copyToClipboard}
      >copy</button>
    </div>
    <div>
      <input type="range"
      min={8}
      max={50}
      value={length}
      style={{width:80}}
      onChange={(e)=>setLength(e.target.value)}
      
      />
      <label style={{color:'white'}}>Length: {length}</label>
      <input type="checkbox" 
      defaultChecked={includeNumber}
      onChange={()=>{
        setIncludeNumber((prev)=>!prev)
      }}
      />
      <label style={{color:'white'}}>Number</label>
      <input type="checkbox"
      defaultChecked={includeChar}
      onChange={()=>{
        setIncludeChar((prev)=>!prev)
      }}
      />
      <label style={{color:'white'}}>Symbol</label>
    </div>
    </div>
  )
}

export default Password