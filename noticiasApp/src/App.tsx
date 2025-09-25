import { useState } from 'react'
import './index.css'

import Login from './Login'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Categoria from './Componentes/Categoria/Categoria'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <nav>
        <Link to="/">login</Link> |{" "}
        <Link to="/categoria">About</Link> |{" "}
    
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/categoria" element={<Categoria></Categoria>} />
    
      </Routes>
    </BrowserRouter>
  )
}

export default App
