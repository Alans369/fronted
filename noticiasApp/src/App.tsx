
import './index.css'

import Login from './Login'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Categoria from './Categoria/Categoria'
import Admin from './Admin'
import Noticia from './Noticias/Noticia'

function App() {


  return (
    
    <BrowserRouter>
      <nav>
        <Link to="/">login</Link> |{" "}
        <Link to="/admin">About</Link> |{" "}
    
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
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
