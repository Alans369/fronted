import axios, { type AxiosInstance } from "axios";
import type { Categoria,Noticia,Paginanoticiass } from "../helper/Types";

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
      return result.data;
    } catch (error) {
      console.log(error)
      throw error;
  }
 }

  async save(data:Pick<Categoria,'nombre'>){
         try {
             return this.request.post(`${this.url}/api/categorias`,
                 data
             )
         } catch (error) {
            console.log(error)
             throw error;
             
         }
     }

     async update(data:Noticia){
        console.log('enviando data',data)

        const noticas = {
            id: data.id,
            titulo: data.titulo,
            contenido: data.contenido,
            fechaPublicacion: data.fechaPublicacion,
            categoriaId:parseInt(String(data.categoria)),
        
    }

      console.log('actualizando',data)
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
            return this.request.delete(`${this.url}/api/categorias/${id}`)
        } catch (error) {
            console.log(error)
            throw error;
            
        }

    }

}