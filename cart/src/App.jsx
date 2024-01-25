import {createBrowserRouter , createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout' 
import Products from './pages/Products'
import Cart from './pages/Cart'
function App() {

 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
       <Route path='/' element={<Products/>}/>
       <Route path='cart' element={<Cart/>}/>
   </Route>
  )
 )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
