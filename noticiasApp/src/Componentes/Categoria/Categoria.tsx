import { useEffect, useState } from "react";
import { CategoriaHttp } from "../../restore/CategoriaHttp";
import { Barralateral } from "../Barralateral";
import { Tabla } from "../Tabla";
import { FormAdd } from "../FormAdd";


interface  cat 
  {id:number,nombre:string}


function Categoria() {
   
  const data:cat[]=[];

    const [categorias,setCategorias]=useState(data)

    const [barraLateral,setBarraLateral]=useState('menu')


    async function getcategoria(){

      const http = new CategoriaHttp();
      try {
        const result  = await http.getAll(0,5)
        console.log(result.content)
        setCategorias(result.content)
      } catch (error) {
        console.log(error)
        
      }

    }

    function cambiarB():void{
        console.log('hola')

    }

    useEffect(() => {
      getcategoria()
     },[]);

     

    let componente;

    if(barraLateral==='Add'){
        componente=<FormAdd onButtonClick={cammbiar}/>
    }

    function cammbiar(estado:string):void{
        setBarraLateral(estado)

    }


    if(barraLateral=='menu'){
        componente=<Barralateral onButtonClick={cammbiar}/>
    }

    

  return (
  <>
    <div className="flex">
           {componente}

        <div className="w-4/5 pt-40 pl-20 pr-20">
        <Tabla data={categorias}/>
        </div>
   
        </div>
        </>


  )
}

export default Categoria