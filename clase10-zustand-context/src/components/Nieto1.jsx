//import { useAppContext } from "../context/myContext"
import useStore from "../Store/useStore"

const Nieto1 = () => {
    const {contador}= useStore()
    //const {contador} = useAppContext()

  return (
    <div className="bg-info text-center">
        <br />
        <h3>Contador en NIETO 1</h3>
        <img src={`./${contador}.png`} alt="" />
        <br /><br />
    </div>
  )
}

export default Nieto1