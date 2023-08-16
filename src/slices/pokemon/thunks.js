import { setPokemons, startLoadindPokemon } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        // console.log(getState()) obtenemos el state del store
        dispatch(startLoadindPokemon())

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        const data = await resp.json()
        
        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
}