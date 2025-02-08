import { createContext,useContext,useState } from "react";

const AppContext = createContext();

export const useAppContext = ()=>useContext(AppContext)

export const AppProvider =({children})=>{
//propiedades dentro de un objeto
const initialState = {
    nombre:"",
    mail:"",
    tel:"",
    contador:0,
    color:false
}

const [state,setState] = useState(initialState)


//metodos o acciones
const cambiarNombre = (nuevoName)=>setState((prevState)=>({...prevState,nombre:nuevoName}))
const cambiarTel = (nuevoTel)=>setState((prevState)=>({...prevState,tel:nuevoTel}))
const cambiarMail = (nuevoMail) => setState((prevState)=>({...prevState,mail:nuevoMail}))
const incrementar = ()=>setState((prevState)=>({...prevState,contador:prevState.contador+1}))
const decrementar = ()=>setState((prevState)=>({...prevState,contador:prevState.contador-1}))
const cambiarColor = ()=>setState((prevState)=>({...prevState,color:!prevState.color}))


const contextValues = {
    ...state,
    cambiarNombre,
    cambiarTel,
    cambiarMail,
    incrementar,
    decrementar,
    cambiarColor
}

return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>

}
