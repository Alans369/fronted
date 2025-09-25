import { useEffect, useRef, useState } from "react";
import { CategoriaHttp } from "../../restore/CategoriaHttp";
import { Barralateral } from "../Barralateral";
import { Tabla } from "../Tabla";
import { FormAdd } from "../FormAdd";
import { FormEdit } from "../FormEdit";


interface  cat 
  {id:number,nombre:string}


function Categoria() {
   
  const data:cat[]=[];

    const [categorias,setCategorias]=useState(data)

    const [barraLateral,setBarraLateral]=useState('menu')

    const [pagination,setPagination]=useState(0)

    const [edit,setEdit]=useState({id:0,nombre:''})


    async function getcategoria(){

      const http = new CategoriaHttp();
      try {
        const result  = await http.getAll(pagination)
        
        console.log(result)
        setCategorias(result.content)
        setPagination(result.totalPages)
      } catch (error) {
        console.log(error)
        
      }

    }

    async function borrar(id:number){
      const http = new CategoriaHttp();
       try {
        const result  = await http.delete(id)
        
        setPagination(result.totalPages)
      } catch (error) {
        console.log(error)
        
      }

    }

    useEffect(() => {
      getcategoria()
     },[pagination]);

     

    let componente;

    if(barraLateral==='Add'){
        componente=<FormAdd onButtonClick={cammbiar}/>
    }
    if(barraLateral=='Edit'){
      componente=<FormEdit data={edit} onButtonClick={cammbiar}/>

    }
   

    function cammbiar(estado:string):void{
        setBarraLateral(estado)

    }

    function cammbiarE(estado:string,cat:{id:number,nombre:string}):void{
      setEdit(cat)
      setBarraLateral(estado)



    }

    function cammbiarPagina(num:number):void{
        setPagination(num)

    }


    if(barraLateral=='menu'){
        componente=<Barralateral onButtonClick={cammbiar}/>
    }

    

  return (
  <>
    <div className="flex">
           {componente}

        <div className="w-4/5  p-60">
        <Tabla borrar={borrar} data={categorias} page={pagination}  cambiarPagina={cammbiarPagina} cambiarBarra={cammbiarE}/>
        </div>
   
    </div>
        </>


  )
}

export default Categoria