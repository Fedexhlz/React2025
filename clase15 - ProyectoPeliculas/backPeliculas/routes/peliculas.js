const express = require("express")
const {getAllMovies,getOneMovie,createMovie,deleteMovie,updateMovie} = require("../controllers/peliculas.js")

const router = express.Router()

router.get("/peliculas",getAllMovies)
router.get("/peliculas/:id",getOneMovie)
router.post("/peliculas",createMovie)
router.delete("/peliculas/:id",deleteMovie)
router.put("/peliculas/:id",updateMovie)

module.exports = router
