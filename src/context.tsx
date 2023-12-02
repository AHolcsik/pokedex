import React, { useState } from "react"

export const PokeContext = React.createContext({})

const PokeProvider = ({children}) => {
  const [contextPokemon, setContextPokemon] = useState([])

	return (
		<PokeContext.Provider value={{contextPokemon, setContextPokemon}}>
			{children}
		</PokeContext.Provider>
	)
}

export default PokeProvider