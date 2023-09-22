import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [pokeType, setPokeType] = useState <any []>([])
    const [pokemonByType, setByType] = useState <any []>([])

    useEffect(() => {
      setLoading(true)
      axios
        .get('https://pokeapi.co/api/v2/type')
        .then((response) => {
            setPokeType(response.data.results)
            setLoading(false)
        })
        .catch((error) => {
          console.log(error)
          setLoading(false)
        })
    }, [])

    const selectPokeType = (url: string) => {
      axios
        .get(url)
        .then((response) => {
          setByType(response.data)
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Pokedex</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h3>Pokemon types</h3>
          <div className='flex flex-wrap my-4'>
            {pokeType.map((type) => (
              <button
                className='border border-slate-600 rounded-md m-2 p-4 hover:bg-violet-100 w-[100px]'
                onClick={() => selectPokeType(type.url)}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>
      )}
      {pokemonByType.length !== 0 &&
        <div>
          {pokemonByType.pokemon.length !== 0 ? (
            <h3>Pokemon of {pokemonByType.name} type</h3>
          ) : (
            <h3>There are now pokemons to be listed from {pokemonByType.name} type</h3>
          )}
          {pokemonByType.pokemon.map((pokemon) => (
            <button
              className='border border-slate-600 rounded-md m-2 p-4 hover:bg-sky-100 w-[100px]'
            >
              <Link to='/profile' state={{ url: pokemon.pokemon.url }} >{pokemon.pokemon.name}</Link>
            </button>
          ))}
        </div>
      }
    </div>
  )
}

export default Home