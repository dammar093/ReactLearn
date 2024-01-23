import React , {useContext} from 'react';
import userContext from '../context/userContext';


const Profile = () => {
 
  const {user} = useContext(userContext)
  
  if(!user) return <h2>Please Login</h2>;
  return (
    <div>
       <h2>Welcome: {user.username}</h2>
    </div>
  )
}

export default Profile