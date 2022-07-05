import React from 'react'
import CharactersList from './components/charactersList'

function App() {
  return (
    <div className='bg-dark text-white'>
      <h1 className='text-center display-1 py-4'>Rick and Morty</h1>
      <CharactersList/>
    </div>
  )
}

export default App