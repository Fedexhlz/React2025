

const Footer = ({nombre,edad,domicilio,soltero}) => {

    //console.log(props.Alumno2.nombre);

    return (
        // fragment
        <div className="bg-success">
            <br />
            <h3 className="text-danger font-w text-center">react 2025 derechos reservados</h3>
            <br />
            <ul>
                <li>nombre: {nombre}</li>
                <li>edad: {edad}</li>
                <li>domiciilio : {domicilio.calle}</li>
                <li>soltero: {soltero && "casada"}</li>
            </ul>
        </div>
    );
}

export default Footer;