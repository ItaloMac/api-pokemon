const express = require('express')

const rotas = express()

const pokemons = require('./controladores/pokemons')

rotas.get('/pokemons', pokemons.listagemPokemons)
rotas.get('/pokemons/:id', pokemons.detalhesPokemon)


module.exports = rotas;