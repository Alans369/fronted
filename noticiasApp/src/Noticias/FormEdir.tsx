import  { useContext, useEffect, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom';
import { serviceNoticia } from '../services/Noticia';
import { DataContext } from './DataContext';
interface FormEditProps {
  isOpen: boolean;
  onClose: (param: boolean) => void;
  upload:(page:number) => void;
}

const FormEdir = ({ isOpen, onClose,upload }: FormEditProps) => {


    const services = new serviceNoticia()
      
    
       const [isVisible, setIsVisible] = useState(false);
    
       const context  =useContext(DataContext)
       const {noticia,setNoticia} = context
       
      
    
        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setNoticia(values => ({...values, [name]: value}))
        }


          const  mensaje = 
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg" role="alert">
                        <span className="font-semibold text-[15px] inline-block mr-4">Success!</span>
                        <span className="block text-sm font-medium sm:inline max-sm:mt-2">This is a success message that requires your attention.</span>
                    </div>
        
           const handleSubmit = async (e: FormEvent) => {
            e.preventDefault();
        
            try {
              const response = await services.update(noticia)
              console.log(response)
              setIsVisible(true)
              
      
            } catch (error) {
              console.log(error)
              
            }
        
           }
        
             useEffect(() => {
            // Si el mensaje es visible, inicia un temporizador
            if (isVisible) {
              const timer = setTimeout(() => {
                setIsVisible(false);
                onClose(false)
                upload(0)
                // Oculta el mensaje después de 1000 ms (1 segundo)
              }, 1000);
        
              // Limpia el temporizador si el componente se desmonta antes de que pase el segundo
              return () => clearTimeout(timer);
            }
          }, [isVisible]);


     console.log("abrinedo");
  if (!isOpen) return null;

    
  
  
    return createPortal (
      <div
        id="popup-modal"
       className="  fixed z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-5/5">
                    
            <div className="p-4 w-2/5 bg-white">
                    <h2 className="text-3xl text-slate-900 font-bold">Editar</h2>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                        <label className='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
                        <input type='text' placeholder='Enter Name'
                        name="titulo"
                        value={noticia.titulo}
                        onChange={handleChange} 
                        className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
                    </div>
                    <div>
                        <label className='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
                        <input type='text' placeholder='Enter Email'
                        name="contenido"
                        value={noticia.contenido}
                        onChange={handleChange} 
                        className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
                    </div>
                    <div>
                        <label className='text-sm text-slate-900 font-medium mb-2 block'>Subject</label>
                        <input type='date' placeholder='Enter Subject'
                        name="fechaPublicacion"
                        value={noticia. fechaPublicacion}
                        onChange={handleChange} 
                        className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
                    </div>
                    <div>
                        <label className='text-sm text-slate-900 font-medium mb-2 block'>Message</label>
                        <input placeholder='Enter Message'
                        name="categoria"
                        type='number'
                        value={noticia.categoria.id}
                        onChange={handleChange} 
                        className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"/>
                    </div>
                    <button type='submit'
                        className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer">Send </button>

                    <button onClick={()=>{onClose(false)}} 
                        className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer">cancelar</button>
                    </form>
                    {isVisible &&  mensaje}
                </div>

                
                    
                    </div>
            
                
  
  
      </div>,    document.body
     
    );
}

export default FormEdir