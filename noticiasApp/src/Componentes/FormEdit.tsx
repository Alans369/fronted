import { useState } from "react";
import { CategoriaHttp } from "../restore/CategoriaHttp";
import { FlechaAtras } from "./FormAdd";

interface param {
    data:{id:number,nombre:string}
    onButtonClick: (estado:string) => void;

}


export function FormEdit({data,onButtonClick}:param){
    const [datos, setDatos] = useState(data);

    const handleSubmit = async () => {
        const http = new CategoriaHttp()
        console.log(await http.update(datos))
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
                value={datos.nombre}
                onChange={(e) => setDatos(values => ({...values, ['nombre']: e.target.value}))}
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