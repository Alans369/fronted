import { useContext, useState,useEffect, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { serviceCategoria } from '../services/Categoria';
import { DataContext } from './DataContext';


interface FormEditProps {
  isOpen: boolean;
  onClose: (param: boolean) => void;
  upload:(page:number) => void;
}

const Delet = ({ isOpen, onClose,upload }: FormEditProps) => {

   const context  =useContext(DataContext)

      
        if (!context) {
            throw new Error('Delet debe ser usado dentro de DataContext.Provider');
        }
       const {shareD} = context


    const services = new serviceCategoria()
      const [isVisible, setIsVisible] = useState(false);


      const borrar = async (e: FormEvent) => {
          e.preventDefault();
      
          try {
            const response = await services.delete(shareD.id)
            console.log(response)
            setIsVisible(true)
            upload(0)
            
            
          } catch (error) {
            console.log(error)
            
          }
      
         }
    
  
    
      


        const  mensaje = 
          <div className="bg-green-100 text-green-800 p-4 rounded-lg" role="alert">
                <span className="font-semibold text-[15px] inline-block mr-4">Success!</span>
                <span className="block text-sm font-medium sm:inline max-sm:mt-2">This is a success message that requires your attention.</span>
            </div>


         useEffect(() => {
            // Si el mensaje es visible, inicia un temporizador
            if (isVisible) {
              const timer = setTimeout(() => {
                setIsVisible(false); // Oculta el mensaje después de 1000 ms (1 segundo)
                onClose(false)
              }, 1000);
        
              // Limpia el temporizador si el componente se desmonta antes de que pase el segundo
              return () => clearTimeout(timer);
            }
          }, [isVisible]);
   


  console.log("abrinedo");
  if (!isOpen) return null;


  return createPortal(
    <div>
            <div id="modal">
                <div
                    className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
                    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 relative">
                        <svg id="closeIcon" xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>

                        <div className="mt-6">
                             {isVisible && mensaje}
                            <div className="w-14 h-14 p-3.5 rounded-full bg-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-red-500 inline" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                        data-original="#000000" />
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-slate-900 text-lg font-semibold">Are you sure you want to delete it?</h3>
                                <p className="text-slate-600 text-sm mt-2">{`estas seguro que de seas borar: ${shareD.nombre}`}</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button id="closeButton" onClick={() => { onClose(false) }}
                                    className="px-5 py-2.5 rounded-md cursor-pointer w-full text-slate-900 text-sm font-medium bg-gray-200 hover:bg-gray-300 active:bg-gray-200">No,
                                    Cancel</button>
                                <button onClick={borrar}
                                    className="px-5 py-2.5 rounded-md cursor-pointer w-full text-white text-sm font-medium bg-red-600 hover:bg-red-700 active:bg-red-600">Yes,
                                    Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>,
    document.body
  )
}

export default Delet