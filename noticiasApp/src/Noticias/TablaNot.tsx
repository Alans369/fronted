import React, { Suspense, useEffect, useRef, useState } from 'react'
import { serviceNoticia } from '../services/Noticia';
import type { Noticia } from '../helper/Types';
import { DataContext } from './DataContext';
import FormEdir from './FormEdir';
import FormAdd from './FormAdd';
import Delet from './Delet';
import Sniper from '../Sniper';

const TablaNot = () => {

     const [noticia, setNoticia] = useState<Noticia>({
       id: 0,
       titulo: '',
       contenido: '',
       fechaPublicacion:'',
       categoria:{id:0,nombre:''}
     });


     const [isOpenEdit, setIsOpenEdit] = useState(false);
     const [cargando, setCargando] = useState(true);
    
      const [isOpenDelet, setIsOpenDelet] = useState(false);
      const [isOpenAdd, setIsOpenAdd] = useState(false);
    
   
        
        const [noticias,setNoticias]=useState<Noticia[]>([{
       id: 0,
       titulo: '',
       contenido: '',
       fechaPublicacion:'',
       categoria:{id:0,nombre:''}
     }])
    
        const [pagination,setPagination]=useState(0)

        const page =useRef(0)



    async function getnoticia(){
        
              const http = new serviceNoticia();
              try {
                const result  = await http.getAll(pagination)
                
                console.log(result)
                setNoticias(result.content)
                page.current=result.totalPages
              } catch (error) {
                console.log(error)
                
              }finally{
                setCargando(false);
              }
              
        
            }

             
    
            useEffect(() => {
                getnoticia()
            },[pagination]);

            function cargarNuevo(page:number){
                setCargando(true)
                setPagination(page)
              }

            const items = [];

            for (let i = 0; i < page.current; i++) {
                items.push(<li>
                <span onClick={()=>{cargarNuevo(i)}} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i+1}</span>
                </li>);
            }

    function handleOpenEdit(item:Noticia){
        setNoticia(item)
        setIsOpenEdit(true)
    }

       function handleOpenDelete(item:Noticia){
        setNoticia(item)
        setIsOpenDelet(true)
    }


   
    


  return (

  <>

  <Suspense fallback={<div>Loading...</div>}>
  <DataContext.Provider value={{noticia, setNoticia}}>

         <FormEdir upload={setPagination}   isOpen={isOpenEdit} onClose={setIsOpenEdit} />
          <FormAdd upload={setPagination}   isOpen={isOpenAdd} onClose={setIsOpenAdd} />
           <Delet upload={setPagination}  isOpen={isOpenDelet} onClose={setIsOpenDelet} />
            
    </DataContext.Provider>

  


  <div className="overflow-x-auto shadow-md sm:rounded-lg p-20 flex-col  ">
      <button onClick={()=>{setIsOpenAdd(true)}} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add</button>
      <table className="min-w-full bg-white w-24 table-fixed w-full">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Title
            </th>
            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Content
            </th>

            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Joined At
            </th>
             <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Category
            </th>

            <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">

         {
            cargando ?<tr>
            <td colSpan="5" className="p-8">
              <div className="flex justify-center items-center">
                <Sniper />
              </div>
            </td>
          </tr>
            : 
            

        <>
            {noticias?.map((item)=>(
                <tr className="hover:bg-gray-50">
            <td className="p-4 text-[15px] text-slate-900 font-medium">
              {item.titulo}
            </td>
            <td className="p-4 text-[15px] text-slate-600 font-medium">
              {item.contenido}
            </td>
            <td className="p-4 text-[15px] text-slate-600 font-medium">
              {item.fechaPublicacion}
            </td>
            <td className="p-4 text-[15px] text-slate-600 font-medium">
              {item.categoria.nombre}
            </td>
            <td className="p-4">
              <div className="flex items-center">
                <button onClick={()=>{handleOpenEdit(item)}} className="mr-3 cursor-pointer" title="Edit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                    viewBox="0 0 348.882 348.882">
                    <path
                      d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                      data-original="#000000" />
                    <path
                      d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                      data-original="#000000" />
                  </svg>
                </button>
                <button onClick={()=>{handleOpenDelete(item)}} title="Delete" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000" />
                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>

          

            )
            )}
          </>
        

        


        
          }

</tbody>
        
      </table>

      <div className='flex justify-end mr-10 mt-5'>
        <nav aria-label="Page navigation example mr-30">
    <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
        <span onClick={()=>{cargarNuevo(0)}} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
        </span>
        </li>
        {items}
        <li>
        <span onClick={()=>{cargarNuevo(pagination)}} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
        </span>
        </li>
    </ul>
    </nav>

     

    </div>
    </div>

  </Suspense>

    
  </>
    



    
  )
}

export default TablaNot