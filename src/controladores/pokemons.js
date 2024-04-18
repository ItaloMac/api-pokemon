const { listarPokemons, detalharPokemon } = require('utils-playground')


const listagemPokemons = async (req,res) => {
    const pokemons = await listarPokemons(10);
    return res.json(pokemons);
}

const detalhesPokemon = async (req,res) => {
    const { id } = req.params;
    
    try {
        const pokemonBuscado = await detalharPokemon(id)
    
        if (!pokemonBuscado) {
            return res.status(404).json({ error: 'Pokemon não encontrado' });
        }

        const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonBuscado;
        
        res.json(produtoBuscado);
    } catch (error) {
        console.error('Erro ao detalhar o Pokémon:', error);
        res.status(500).json({ error: 'Erro ao detalhar o Pokémon' }); 
    }
}    

module.exports = {
    listagemPokemons,
    detalhesPokemon,
    
}
