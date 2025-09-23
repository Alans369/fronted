import axios from "axios";
import { useEffect, useState } from "react";



function CategoriasTable() {

    const [categorias,setCategorias]=useState([{id:null,nombre:null}])


    useEffect(() => {

        const token = localStorage.getItem('user');
        axios.get('https://apinoticia.onrender.com/api/categorias?page=0&size=1',{
             headers: {
                    'Authorization': `Bearer ${token}`
                }
        }   
        ).then(function (response) {
            setCategorias(response.data.content)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
     },[]);

    

  return (
    <div>
        <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              #
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              nombre
            </th>

            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
    

        {
            categorias.map(item=>(
            <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              {item.id}
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              {item.nombre}
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>
            ))
        }
          
          

        

         
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default CategoriasTable
