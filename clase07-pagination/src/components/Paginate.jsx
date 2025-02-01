import { Pagination } from "react-bootstrap"

const Paginate = ({prev,next,handlePages}) => {
//console.log(prev,next);

    const handlePrev =() =>{
        //https://rickandmortyapi.com/api/character?page=2
        let datos = prev.split("?")
        //console.log(datos);

        const [,newurl] = datos
        
        handlePages(newurl) // =page40
    }

    const handleNext = () =>{
        let datos = next.split("?")
        //console.log(datos);

        const [,newurl] = datos
        
        handlePages(newurl) // =page40
    }

    const handleUltimo = () =>{

    }

  return (
    <Pagination className="text-center">
    {prev && <Pagination.Prev onClick={handlePrev}>anterior</Pagination.Prev>}
    {next && <Pagination.Next onClick={handleNext}>siguiente</Pagination.Next>}
    
    <Pagination.Last onClick={handleUltimo}>ultimo</Pagination.Last>
</Pagination>
  )
}

export default Paginate