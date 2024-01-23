import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Contact, Home } from './components/index'
import User from './components/user/User'
import Github, { gihubLoader } from './components/github/Github'
import App from './App'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element  :<Layout/>,
//     children:[
//       {
//         path : '/',
//         element : <Home/>
//       },
//       {
//         path : 'about',
//         element : <About/>
//       },
//       {
//         path : 'contact',
//         element : <Contact/>
//       }
      
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={gihubLoader}
      path='github' element={<Github/>}/>
     </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
