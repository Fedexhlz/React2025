import {create} from "zustand"

const useStore = create((set)=>({
  //propiedades
user:localStorage.getItem("user"),
color:false,



//acciones o metodos
loginUser:(token)=>{
    localStorage.setItem("user",token)
    set({user:token})},
logoutUser:()=>{
    localStorage.removeItem("user")
    set({user:null})},
cambiarColor:()=>set((state)=>({color:!state.color}))


}))

export default useStore