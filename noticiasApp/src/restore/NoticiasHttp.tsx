import axios from "axios";

export interface PaginaCategorias {
    content:          Content[];
    pageable:         Pageable;
    last:             boolean;
    totalElements:    number;
    totalPages:       number;
    size:             number;
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
}

export interface Content {
    id:     number;
    nombre: string;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number; 
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}

export interface  categoria{
    id:number
    nombre:string
}

export class CategoriaHttp{

    private url:string='https://apinoticia.onrender.com';
    private token:null | string='';
    private send: any

    constructor(){
        this.token=localStorage.getItem('user')
        this.send=axios.create({headers: {
                    'Authorization': `Bearer ${this.token}`}})
    }

    async getCategoria(id:number){
        try {
            return this.send.get(`${this.url}/api/categorias/${id}`)
        } catch (error) {
            throw error;
            
        }
    }

    async getAll(page:number,size:number=5):Promise<PaginaCategorias>{
        try {
            const result = await  this.send.get(`${this.url}/api/categorias?page=${page}&size=${size}`)
            return result.data
        } catch (error) {
            throw error;
        }
    }

    async save(data:Pick<categoria,'nombre'>){
        try {
            return this.send.post(`${this.url}/api/categorias`,
                data
            )
        } catch (error) {
            throw error;
            
        }
    }

    async update(data:{id:number,nombre:string}){
        try {
            return this.send.put(`${this.url}/api/categorias/1`,
                
                    data
                
            )
        } catch (error) {
            throw error;
            
        }

    }

    
    async delete(id:number){
        try {
            return this.send.delete(`${this.url}/api/categorias/${id}`,
                
            )
        } catch (error) {
            throw error;
            
        }

    }
}