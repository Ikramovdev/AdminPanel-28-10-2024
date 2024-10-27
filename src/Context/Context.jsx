import { createContext, useState } from "react";

export const createContext = Context()

export const LangContext = ({children}) => {
    const [lang,setLang] = useState("uz")
    return <Context.Provider value={{lang,setLang}}>{children}</Context.Provider>
}