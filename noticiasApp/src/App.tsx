
import './index.css'

import Login from './Login'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import Categoria from './Categoria/Categoria'
import Admin from './Admin'
import Noticia from './Noticias/Noticia'
import { Register } from './Register'
import Navbar from './Navbar'
import NoticiasCliente from './NoticiasCliente'

function App() {


  return (
    
    <BrowserRouter>
   

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="login" element={<Login />} />
  

          <Route path="/register" element={<Register />} />
          <Route path='/noticias' element={<NoticiasCliente/>}/>
     
        <Route path="/categoria" element={<Categoria></Categoria>} />
        
        <Route path="/admin" element={<Admin></Admin>} >
         <Route path="cat" element={<Categoria />} />
         <Route path="noti" element={<Noticia />} />
        
        </Route>


    
      </Routes>
    </BrowserRouter>
  )
}

export default App
