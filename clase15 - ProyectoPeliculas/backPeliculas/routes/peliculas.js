const express = require("express")
const {getAllMovies,getOneMovie,createMovie,deleteMovie,updateMovie,searchMovie} = require("../controllers/peliculas.js")

const router = express.Router()

router.get("/peliculas",getAllMovies)
router.get("/peliculas/:id",getOneMovie)
router.get("/peliculas/search/:query",searchMovie)
router.post("/peliculas",createMovie)
router.delete("/peliculas/:id",deleteMovie)
router.put("/peliculas/:id",updateMovie)

module.exports = router
