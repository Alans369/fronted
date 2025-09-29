export interface login {
  login:string,
  clave:string

}

export interface  Categoria{
    id:number
    nombre:string
}

export interface Noticia {
  id: number
  titulo: string
  contenido: string
  fechaPublicacion: string
  categoria: Categoria
}

export interface Paginanoticiass {
    content:          Noticia[];
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
