import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserConetxt';
const FormInput = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const {setUser} = useContext(UserContext)
  const handelSubmit = (e) =>{
    e.preventDefault();
    setUser(username,password);
    setUsername('');
    setPassword('');
  }
  return (
      <>
       <h2>Login Form</h2>
        <form action="" onSubmit={handelSubmit}>
          <input type="text"
            value={username}
            placeholder='Enter username'
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input type="text"
            value={password}
            placeholder='Enter password'
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
      </>
  );
}

export default FormInput;