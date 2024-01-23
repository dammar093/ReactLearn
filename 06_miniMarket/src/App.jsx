import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Product from './Pages/Products/Products'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      [
        <Route path='/' element = {<Layout/>}>
          <Route path='/' element = {<Home/>}/>
          <Route path='products/:id' element = {<Products/>}/>
          <Route path='product/:id' element = {<Product/>}/>
        </Route>
      ]
    )
  )
  return (
   <div className=''>
      <RouterProvider router={router}/>
   </div>
  )
}

export default App
