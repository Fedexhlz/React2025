//controladores son las consultas que yo hago en my DB

//crud en my DB (insert , delete ,update,select)

const { connection } = require("../Database/config.js");

//CRUD hacia la DB
const getAllMovies = (req, res) => {
  const query = "select * from peliculas";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const getOneMovie = (req, res) => {
  const id = req.params.id;

  const query = "select * from peliculas where id=" + id;
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};
const createMovie = (req, res) => {
  //voy tomando los datos que vienen a travez del cuerpo de la peticion
  const nombre = req.body.nombre;
  const genero = req.body.genero;
  const año = req.body.año;
  const imagen = req.body.imagen;
  const url_descarga = req.body.url_descarga;

  //creo la query para mi DB
  const query =
    "insert into peliculas (nombre,genero,año,imagen,url_descarga) values (?,?,?,?,?);";
  //son los datos que van hacia los signos de pregunta
  const values = [nombre, genero, año, imagen, url_descarga];
  //const query2 = `insert into contacts (nombre,apellido,direccion,telefono,imagen,goles) values (${nombre},${apellido},${direccion},${telefono},${imagen},${goles}`

  connection.query(query, values, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const deleteMovie = (req, res) => {
  const id = req.params.id;
  const query = "delete from peliculas where id=" + id;

  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};
const updateMovie = (req,res) => {
    const id = req.params.id
    const {nombre,genero,año,imagen,url_descarga} = req.body

    const query = "UPDATE peliculas SET nombre=? , genero=?,año=?, imagen=?,url_descarga=? where id=?;"
    const values = [nombre,genero,año,imagen,url_descarga,id]

    connection.query(query,values,(error,results)=>{
        if (error) throw error;
        // if ( res.status === 200 ) {
        //     res.send({message:"contacto acutalizado "},res.json(results))
        // }
       res.json(results);
    })
};

module.exports = {
  getAllMovies,
  getOneMovie,
  deleteMovie,
  createMovie,
  updateMovie,
};
