const axios = require("axios")
const buscarPokemon = async (nome) => {
    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`

        const resposta = await axios.get(url)

        const { name, id, height, weight, types } = resposta.data

        console.log(`Pokémon encontrado: ${name}`)
        console.log(`ID: ${id}`)
        console.log(`Altura: ${height / 10}m`)
        console.log(`Peso: ${weight / 10}kg`)
        console.log(`Tipos: ${types.map((t) => t.type.name).join(', ')}`)

    } catch (erro) {

        console.error("Erro ao buscar Pokémon: ", erro.response?.status === 404
            ? "Pokémon não encontrado!" : erro.message)

    }
}

buscarPokemon("rat")