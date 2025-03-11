const express = require("express")
const {connection} = require("./Database/config.js")
const peliculasRoutes = require("./routes/peliculas.js")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/",peliculasRoutes)


app.get("/",(req,resp)=>{
    resp.send({message:"WELCOME to my API"})
})

const PORT = 8000;

connection.connect((err)=>{
    if (err) throw err
    console.log("Conectado a my DB");
})

app.listen(PORT,(err)=>{
    if (err) throw err
    console.log("Conectado en el puerto: "+PORT)
})
