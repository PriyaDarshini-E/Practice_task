import {Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/about'  element={<About/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/login'  element={<Login/>}/>
        
        <Route path='/products/' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      
    </Routes>
    </>
  )
}

export default App