import { useForm } from "react-hook-form"
import { schema } from "../common/schema"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
import { BASE_URL_USERS } from "../constants/constants"
import { useNavigate } from "react-router-dom"

const MainRegister = () => {

  const navigate = useNavigate()

  const {register,handleSubmit,reset,formState: { errors } } = useForm({
    resolver: yupResolver(schema),})

  const enviarForm = async (data) =>{
    console.log(data);
    reset()
    //tomaba los datos de los inputs y los enviaba x un post axios a la DB
    try {
      let response = await axios.post(BASE_URL_USERS,{...data,rol:"user"}) 

      if (response) {
          alert("contacto creado correctamente")
          navigate("/")
      }else {
        alert("hubo un error")
      }
  } catch (error) {
   console.log(error.message);   
  }
  }

  return (
    <div>
       

        <br /><br />
        <h2>Registrate en nuestra Web</h2>
        <br />
        <form action="" onSubmit={handleSubmit(enviarForm)}>
          <label htmlFor="">nombre</label>
          <input type="text" {...register("nombre")} id="nombre"/>
          {errors.nombre && <span className="bg-dark text-danger fw-bold">{errors.nombre.message}</span>}
          <br />
          <label htmlFor="">password</label>
          <input type="password" {...register("password")} id="password"/>
          {errors.password && <span>{errors.password.message}</span>}
          <br />
          <label htmlFor="">email</label>
          <input type="text"  {...register("email")} id="email"/>
          {errors.email && <span>{errors.email.message}</span>}
          <br />
          <button type="submit">registrarte</button>
        </form>

        <br />
    </div>
  )
}

export default MainRegister