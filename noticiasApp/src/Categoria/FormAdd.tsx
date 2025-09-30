import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { createPortal } from 'react-dom';
import { serviceCategoria } from '../services/Categoria';

interface FormEditProps {
  isOpen: boolean;
  onClose: (param: boolean) => void;
  upload:(page:number) => void;
}

const FormAdd = ({ isOpen, onClose,upload }: FormEditProps) => {
    const services = new serviceCategoria()

    const [isVisible, setIsVisible] = useState(false);

    const[ formData,setFormData]=useState({nombre:'de'})


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({nombre:value} );
      };
    


       const  mensaje = 
              <div className="bg-green-100 text-green-800 p-4 rounded-lg" role="alert">
                    <span className="font-semibold text-[15px] inline-block mr-4">Success!</span>
                    <span className="block text-sm font-medium sm:inline max-sm:mt-2">se a credao correctamente.</span>
                </div>
    
       const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        try {
          const response = await services.save({nombre:formData.nombre})
          console.log(response)
          setIsVisible(true)
          upload(0)
          
          
        } catch (error) {
          console.log(error)
          
        }
    
       }
    
         useEffect(() => {
        // Si el mensaje es visible, inicia un temporizador
        if (isVisible) {
          const timer = setTimeout(() => {
            setIsVisible(false); // Oculta el mensaje después de 1000 ms (1 segundo)
          }, 1000);
    
          // Limpia el temporizador si el componente se desmonta antes de que pase el segundo
          return () => clearTimeout(timer);
        }
      }, [isVisible]);
    
     
    
    
      
    
       console.log("abrinedo");
      if (!isOpen) return null;
 
return createPortal(
    <div id="popup-modal"  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
          <form onSubmit={handleSubmit}  className="space-y-6 max-w-md mx-auto p-4">
            <div className="flex items-center">
              <label className="text-slate-400 font-medium w-36 text-sm">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter  name"
                className="px-2 py-5 w-full border-b border-gray-300 focus:border-slate-900 outline-none text-sm bg-white"
                 name="name"
                value={formData.nombre}
                onChange={handleChange} />
              
            </div>

            <button
              data-modal-hide="popup-modal"
              type="submit"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ml-11"
            >
              guardar
            </button>

            <button
              onClick={() => onClose(false)}
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>

            

            {isVisible &&  mensaje}

             
          </form>
        </div>

        
      </div>
    
    
</div>,
    document.body
  );
  
}

export default FormAdd