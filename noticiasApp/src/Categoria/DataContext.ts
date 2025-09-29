import { createContext } from "react";

export interface ContextType {
  shareD: {id:number,nombre:string}|0;
  setShareD: React.Dispatch<React.SetStateAction<{id:number,nombre:string}|0>>;
}

export const DataContext = createContext<ContextType | undefined >(undefined);