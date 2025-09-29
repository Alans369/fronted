
import Menu from './Menu'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <div>
      <Menu></Menu>
    </div>

    
    <div className="p-4 sm:ml-64">
      <Outlet /> 
    
    </div>
    
  
    </>
  )
    
}

export default Admin