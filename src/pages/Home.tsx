import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [pokeType, setPokeType] = useState <any []>([])

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
    }, [
      console.log(pokeType)
    ])
    
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Pokedex</h1>
        {/* <Link to='create'>
        </Link> */}
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h3>Pokemon types</h3>
          <div className='flex flex-wrap my-4'>
            {pokeType.map((type) => (
              <span className='border border-slate-600 rounded-md m-2 p-4 hover:bg-violet-100'>{type.name}</span>
            ))}

          </div>
        </div>

      )}

    </div>
  )
}

export default Home