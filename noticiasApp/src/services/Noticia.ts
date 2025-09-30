import axios, { type AxiosInstance } from "axios";
import type { Categoria,dto,Noticia,Paginanoticiass } from "../helper/Types";

export class serviceNoticia {
  private url: string = "https://apinoticia.onrender.com";
  private token: null | string = "";
  private request: AxiosInstance;

  constructor() {
    this.token = localStorage.getItem("user");
    this.request = axios.create({
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async getCategoria(id:number){
        try {
            return this.request.get(`${this.url}/api/categorias/${id}`)
        } catch (error) {
            console.log(error)
            throw error;
            
        }
    }

  async getAll(page: number=0, size: number = 5): Promise<Paginanoticiass> {
    try {
      const result = await this.request.get(
        `${this.url}/api/noticias?page=${page}&size=${size}`
      );
      console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error)
      throw error;
  }
 }

  async save(data:dto){
    console.log('enviando data',data)
         try {
             return this.request.post(`${this.url}/api/noticias`,
                 data
             )
         } catch (error) {
            console.log(error)
             throw error;
             
         }
     }

     async update(data:Noticia){
        console.log('enviando data para actualizar',data)


         let categoria:number;;

        if(data.categoria.id===undefined){
          categoria= parseInt(data.categoria.toString())


          

      }else{
        categoria=parseInt(data.categoria.id.toString());
          

      }

        

        console.log('id de categoria',categoria)

        

        const noticas = {
            id: data.id,
            titulo: data.titulo,
            contenido: data.contenido,
            fechaPublicacion: data.fechaPublicacion,
            categoriaId:categoria,
        
    }

      console.log('actualizando',noticas)
        try {
            return this.request.put(`${this.url}/api/noticias/1`,
                    noticas
            )
        } catch (error) {
            console.log(error)
            throw error;
            
        }

    }
    
    async delete(id:number){
        try {
            return this.request.delete(`${this.url}/api/noticias/${id}`)
        } catch (error) {
            console.log(error)
            throw error;
            
        }

    }

}