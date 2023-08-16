import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadindPokemon: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.page = action.payload.page
            state.isLoading = false
            state.pokemons = action.payload.pokemons
        },
        removePokemon: (state, action) => {
            const newState = state.pokemons.filter(pokemon => pokemon.name !== action.payload)
            state.pokemons = newState
        }
    }
});

export const { startLoadindPokemon, setPokemons, removePokemon } = pokemonSlice.actions;