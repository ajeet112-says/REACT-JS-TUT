import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import {Route, Routes} from 'react-router-dom' 
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/product'
import PageNotFound from './Pages/PageNotFound'
import Kids from './Pages/Kids'
import Mens from './Pages/Mens'

function App() {
  return (
    <div>
       <Navbar />
       <Navbar2 />
       <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route   path='/contact' element={ <Contact />}/>

          <Route  path='/product' element={ <Product />}> 
             <Route path='mens' element={ <Mens />} />
             <Route path='kids' element={ <Kids />} />

          </Route>

          <Route   path='*' element={ <PageNotFound />}/>
       </Routes>
        
    </div>
  )
}

export default App
