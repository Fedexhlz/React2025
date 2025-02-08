import {create} from "zustand"

const useStore = create((set)=>({
//propiedades
nombre:"",
mail:"",
tel:"",
contador:0,
color:false,

//metodos
cambiarNombre:(nuevoName)=>set({nombre:nuevoName}),
cambiarMail:(nuevoMail)=>set({mail:nuevoMail}),
cambiarTel:(nuevoTel)=>set({tel:nuevoTel}),
incrementar:()=>set((state)=>({contador:state.contador+1})),
decrementar:()=>set((state)=>({contador:state.contador-1})),
cambiarColor:()=>set((state)=>({color:!state.color}))

}))

export default useStore