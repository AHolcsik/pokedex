import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton';

const Profile = () => {
	const [loading, setLoading] = useState(false)
	const [pokemon, setPokemon] = useState <any []>([])
	const { state } = useLocation()
	const [nonHiddenAbilities, setAbilities] = useState([])

	useEffect(() => {
		setLoading(true)
		axios
			.get(state.url)
			.then ((response) => {
				setPokemon(response.data)

				const abilities = []
				Object.keys(response.data.abilities).map(function(key) {
					if (response.data.abilities[key].is_hidden == false) {
						abilities.push(response.data.abilities[key].ability.name)
					}
					setAbilities(abilities.join(", "))
				})

				setLoading(false)
			})
			.catch((error) => {
				console.log(error)
				setLoading(false)
			})
	}, [])

  return (
    <div className='p-4'>
			<BackButton />
			<h1 className='text-3xl my-4'>Pokemon details</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className={`bg-${state.type} text-white flex flex-col border-2 border-orange-300 rounded-xl w-fit p-4`}>
					<div className='my-4'>
						<span className='text-md mr-4 text-gray-500'>name</span>
						<span>{pokemon.name}</span>
					</div>
					<div className='my-4'>
						<span className='text-md mr-4 text-gray-500'>weight</span>
						<span>{pokemon.weight}</span>
					</div>
					<div className='my-4'>
						<span className='text-md mr-4 text-gray-500'>height</span>
						<span>{pokemon.height}</span>
					</div>
					<div className='my-4'>
						<span className='text-md mr-4 text-gray-500'>abilities</span>
						{nonHiddenAbilities.length !== 0 &&
							<span>{nonHiddenAbilities}</span>
						}
					</div>
				</div>
			)}
		</div>
  )
}

export default Profile