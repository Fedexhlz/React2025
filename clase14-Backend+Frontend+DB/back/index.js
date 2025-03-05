//common js
const express = require("express");
const {connection} =require("./Database/config.js")
const cors = require("cors")

//instnacio la libreria (metodos)
const app = express();

//uso las librerias y metodos internos
app.use(express.json());
app.use(cors())



connection.connect((error) => {
  if (error) throw error;
  console.log("Conectado a mi DB");
});

app.get("/", (req, res) => {
  //req -> request
  //res -> response
  console.log("Bienvenido a mi API");
  res.send({ message: "BIENVENIDO a mi APP" });
});

//obtengo todos mis contactos de mi DB
app.get("/contacts", (req, res) => {
  connection.query("select * from contacts;", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

//obtengo un contacto en especifico
app.get("/contacts/:id",(req,res)=>{
    console.log(req.params.id);

    const id = req.params.id

    connection.query("select * from contacts where id="+id,(error,results)=>{
        if (error) throw error;
        res.json(results);
    })


})

//voy agregando un contacto nuevo
app.post("/contacts",(req,res)=>{
   console.log(req.body); 

   //voy tomando los datos que vienen a travez del cuerpo de la peticion
   const nombre = req.body.nombre
   const apellido = req.body.apellido
   const direccion = req.body.direccion
   const telefono = req.body.telefono
   const imagen = req.body.imagen
   const goles = req.body.goles

    //creo la query para mi DB
    const query = 'insert into contacts (nombre,apellido,direccion,telefono,imagen,goles) values (?,?,?,?,?,?);'
    //son los datos que van hacia los signos de pregunta
    const values = [nombre,apellido,direccion,telefono,imagen,goles]
    //const query2 = `insert into contacts (nombre,apellido,direccion,telefono,imagen,goles) values (${nombre},${apellido},${direccion},${telefono},${imagen},${goles}`

    connection.query(query,values,(error,results)=>{
        if (error) throw error;
        res.json(results);
    })

})

//actualizo un contacto en especifico 
app.put("/contacts/:id",(req,res)=>{

    const id = req.params.id
    const {nombre,apellido,direccion,telefono,imagen,goles} = req.body

    const query = "UPDATE contacts SET nombre=? , apellido=?,direccion=?,telefono=?, imagen=?,goles=? where id=?;"
    const values = [nombre,apellido,direccion,telefono,imagen,goles,id]

    connection.query(query,values,(error,results)=>{
        if (error) throw error;
        // if ( res.status === 200 ) {
        //     res.send({message:"contacto acutalizado "},res.json(results))
        // }
       res.json(results);
    })
})

//borro algun contacto especifico

app.delete("/contacts/:id",(req,res)=>{
    const id = req.params.id
    const query = `delete from contacts where id=${id}`

    connection.query(query,(error,results)=>{
        if (error) throw error;
        res.json(results);
    })
})

app.listen(8000, () => {
  console.log("escuchando en el puerto 8000");
});
