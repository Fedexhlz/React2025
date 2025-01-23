

const ShowUsers = (props) => {
    console.log(props);
    //console.log("ShowUsers");
  return (
    <div>
    {props.usuarios.map((user,index)=><div key={index}>
                <h3>nombre completo: {user.nombre} {user.apellido}</h3>
                <h3>edad: {user.edad}</h3>
                <h3>mail: {user.mail}</h3>
            </div>)}
    </div>
  )
}

export default ShowUsers