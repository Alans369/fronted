
interface param{
    data: {id:number,nombre:string}[];
    page: number;
    cambiarPagina: (num:number) => void;

}

export const Tabla= ({data,page,cambiarPagina}:param)=>{

    const items = [];
  
  for (let i = 0; i < page; i++) {
    items.push(<li>
                <span onClick={()=>{cambiarPagina(i)}} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i+1}</span>
            </li>);
  }


    return (
        <>
            <div className="relative overflow-x-auto ">
                <table className="mt-100 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                nombre
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item=>(
                            <tr className="bg-white border-b dark:bg-white-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                {item.id}
                            </th>
                            <td className="px-6 py-4">
                                {item.nombre}
                            </td>
                          
                        </tr>

                        ))
                        }
                        
                       
                    </tbody>
                </table>
            </div>


            <div className="flex justify-center items-center mt-4 ">
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>

                       
                          {items}
                        
                        
                        
                        
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

