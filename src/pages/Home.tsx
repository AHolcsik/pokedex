import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [pokeData, setPokeData] = useState([])

    useEffect(() => {
        setLoading(true)
        axios
            .get('https://pokeapi.co/api/v2')
            .then((response) => {
                setPokeData(response)
                setLoading(false)
            })
    })

  return (
    <div>Home</div>
  )
}

export default Home