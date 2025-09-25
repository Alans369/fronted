import { useState } from "react";
import { CategoriaHttp } from "../restore/CategoriaHttp";

export const FlechaAtras = ({ size = 20 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M19 12H5M5 12L12 19M5 12L12 5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

interface MyComponentProps {
  onButtonClick: (estado:string) => void;
}

export const FormAdd: React.FC<MyComponentProps> = ({ onButtonClick }) => {

   const [nombre, setNombre] = useState('');
   const handleSubmit = async () => {
    const http = new CategoriaHttp()
    console.log(await http.save({nombre}))
    onButtonClick('menu')
  
  };





   
    return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Formulario de Contacto
      </h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ingresa tu nombre"
          />
        </div>

      

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Enviar
        </button>


        <button
           onClick={()=>{onButtonClick('menu')}}
          className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
        >
          <FlechaAtras size={20} />
        </button>


      </div>
    </div>
  );
    
}