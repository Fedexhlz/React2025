import { BASE_URL, URL_LOCATION } from "../constants/contants"


const Locations = () => {

    const getLocation = () =>{
        fetch(`${BASE_URL}${URL_LOCATION}`)
    }



  return (
    <div>
        <h3>aqui muestro todos mis locations</h3>
    </div>
  )
}

export default Locations