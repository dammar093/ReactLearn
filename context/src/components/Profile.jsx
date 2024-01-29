import React, { useContext } from 'react';
import { UserContext } from '../context/UserConetxt';


const Profile = () => {
  
  const {user} = useContext(UserContext)

     if(!user){
       return(
         <h3>Please Lofin</h3>
       )
     }
    else{
      return(
        <h2>username: {user} password: {user.password}</h2>
      )
    }
}

export default Profile