// import { useState } from "react"
import { Button } from "react-bootstrap"
//import { useAppContext } from "../context/myContext"

import useStore from "../Store/useStore"
const Nieto3 = () => {
    const {incrementar,decrementar} = useStore()
    //const {incrementar,decrementar} = useAppContext()

    // const [count,setCount] = useState(0)

    // const handleIncrementar = () =>{
    //     setCount(count+1)
    //     count >=9 && setCount(0)
    // }
    // const handleDecrementar = () =>{
    //     setCount(count-1)
    //     count<=0 && setCount(9)
    // }

    // getValue(count)

  return (
    <div className="bg-secondary text-center">
        <br />
        <h3>contador: {}</h3>
        <br />
        <Button type="button" onClick={incrementar}>+</Button>
        <Button type="button" onClick={decrementar}>-</Button>
        <br /><br />

    </div>
  )
}

export default Nieto3