import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Collection from './pages/Collection'
import PokeProvider from './context'

const App = () => {
  return (
    <PokeProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/collection' element={<Collection />}/>
      </Routes>
    </PokeProvider>
  )
}

export default App