const movesModel = require("../models/movesModel");

async function addMoves(req, res) {
  try {
    const data = req.body;
    const move = await movesModel.create(data);
    res.json({
      message: "move added successfully",
      data: move,
    });
  } catch (err) {
    console.log("error", err);
  }
}

async function getAllMoves(req, res) {
  try {
    const data = await movesModel.find();
    res.json(data);
  } catch (error) {
    console.log(err);
  }
}

async function findPokemonMoves(req, res) {
  try {
    const pokemon = req.params.pokemon;
    // const moves=
  } catch (err) {
    console.log(err);
  }
}

module.exports = { addMoves, getAllMoves, findPokemonMoves };
