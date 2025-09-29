import { createContext } from "react";
import type { Noticia } from "../helper/Types";

export interface ContextType {
  noticia: Noticia;
  setNoticia: React.Dispatch<React.SetStateAction<Noticia>>;
}

export const DataContext = createContext<ContextType |0 >(0);