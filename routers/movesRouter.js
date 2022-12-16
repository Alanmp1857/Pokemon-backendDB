const express = require("express");
const {
  getAllMoves,
  addMoves,
  findPokemonMoves,
} = require("../controllers/movesController");
const movesRouter = express.Router();

movesRouter.route("/all").get(getAllMoves);

movesRouter.route("/").post(addMoves);

movesRouter.route("/:pokemon").get(findPokemonMoves);

//Delete duplicate entries in movesdb

module.exports = movesRouter;
