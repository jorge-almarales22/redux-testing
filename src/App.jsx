import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './slices/pokemon/thunks'
import { removePokemon } from './slices/pokemon/pokemonSlice'

export const App = () => {

  const dispatch = useDispatch()
  const {pokemons, page, isLoading} = useSelector((state) => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, []);

  return (
    <div className="container">
      <h1>Pokemon App</h1>
      <div className="row">
        {
          isLoading ? (
            <h3>Loading...</h3>
          )
          :
          (
            pokemons.map((pokemon, index) => (
  
              <div key={index} className="col-md-3 card">
                <div className="card-header">
                  {pokemon.name}
                </div>
                <div className="card-body">
                  <button className='btn btn-danger' onClick={() => dispatch( removePokemon(pokemon.name) )}>Delete</button>
                </div>
              </div>
  
            ))
          )
        }
      </div>
      <button className='btn btn-primary my-3' onClick={() => dispatch(getPokemons(page + 1))}>Next</button>
    </div>
  )
}

