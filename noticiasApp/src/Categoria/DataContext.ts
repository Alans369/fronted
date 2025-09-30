import { createContext } from "react";

export interface ContextType {
  shareD: {id:number,nombre:string};
  setShareD: React.Dispatch<React.SetStateAction<{id:number,nombre:string}>>;
}

export const DataContext = createContext<ContextType | undefined >(undefined);