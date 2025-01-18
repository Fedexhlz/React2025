import "../css/Header.css"

const Header = (props) => {

  console.log(props);

  //let [a,b,c]=props.perritos
  return (
    <div className="Header" id="Header">
      <br />
      <h1>Bienvenidos a las PROPS</h1>
      <br />
      <br />
      <ul>
        <li>{props.perritos[0]}</li>
        <li>{props.perritos[1]}</li>
        <li>{props.perritos[2]}</li>
      </ul>
      <ul>
        {props.perritos.map((perrito,index) => <ul key={index}>{perrito}</ul>)}
      </ul>

    </div>
  )
}

export default Header