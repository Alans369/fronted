import axios, { type AxiosInstance } from "axios";
import type { Categoria, PaginaCategorias } from "../helper/Types";

export class serviceCategoria {
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

  async getAll(page: number=0, size: number = 5): Promise<PaginaCategorias > {
    try {
      const result = await this.request.get(
        `${this.url}/api/categorias?page=${page}&size=${size}`
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

     async update(data:{id:number,nombre:string}){
      console.log('actualizando',data)
        try {
            return this.request.put(`${this.url}/api/categorias/1`,
                    data
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