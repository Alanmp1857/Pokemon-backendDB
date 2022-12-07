const express = require("express");
const mongoose = require("mongoose");

const dblink =
  "mongodb+srv://Punisher007:4hDIgHYM0O02ijOJ@cluster0.elmuzpg.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dblink)
  .then(() => {
    console.log("DB connected.");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  types: {
    type: Array,
    required: true,
  },
  abilities: {
    type: Array,
    required: true,
  },
  stats: {
    type: Array,
    required: true,
  },
});

const pokemonModel = mongoose.model("pokemonSchema", pokemonSchema);

module.exports = pokemonModel;