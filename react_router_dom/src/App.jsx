import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom' 
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/product'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <div>
       <Navbar />
       <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route   path='/contact' element={ <Contact />}/>
          <Route   path='/product' element={ <Product />}/>
          <Route   path='*' element={ <PageNotFound />}/>
       </Routes>
    </div>
  )
}

export default App
