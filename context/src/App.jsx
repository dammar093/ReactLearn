import React from 'react';
import UserConetxtProvider from './context/UserConetxt';
import FormInput from './components/FormInput';
import Profile from './components/Profile';

const App = () => {
  return (
   <UserConetxtProvider  >
      <FormInput/>
      <Profile/>
   </UserConetxtProvider>
  );
}

export default App;