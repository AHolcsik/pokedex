import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useLocation } from 'react-router-dom'

const Profile = () => {
	const [loading, setLoading] = useState(false)
	const [pokemon, setPokemon] = useState <any []>([])
	const { state } = useLocation()

	useEffect(() => {
		setLoading(true)
		axios
			.get(state.url)
			.then ((response) => {
				setPokemon(response.data)
				console.log(response.data)
				setLoading(false)
			})
			.catch((error) => {
				console.log(error)
				setLoading(false)
			})
	}, [])


  return (
    <div>Profile</div>
  )
}

export default Profile