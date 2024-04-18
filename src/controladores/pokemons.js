const { listarPokemons, detalharPokemon } = require('utils-playground')


const listagemPokemons = async (req,res) => {
    const pokemons = await listarPokemons(10);
    return res.json(pokemons);
}

const detalhesPokemon = async (req,res) => {
    const id = req.params.id
    
    try {
        const pokemonBuscado =  await detalharPokemon(Number(id))
        
        if (!pokemonBuscado) {
            return res.status(404).json({ error: 'Pokemon não encontrado' });
        }

        const {id: pokemonID, name, height, weight, base_experience, forms, abilities, species } = pokemonBuscado;

        const informacoesPokemon  = {
            pokemonID,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species
        }
        
        res.json(informacoesPokemon);
    } catch (error) {
        console.error('Erro ao detalhar o Pokémon:', error);
        res.status(500).json({ error: 'Erro ao detalhar o Pokémon' }); 
    }
}    

module.exports = {
    listagemPokemons,
    detalhesPokemon,
    
}
