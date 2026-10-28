import { useCallback, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PhotoGallery from './components/PhotoGallery'
import Favourites from './components/Favourites'
import Navbar from './components/Navbar'


function App() {
  const [search, setSearch] = useState('') 

   const handleSearchChange = useCallback((value) => {
    setSearch(value)
  }, [])

  return (
    <>
      <Navbar search={search} onSearchChange={handleSearchChange} />
      <Routes >
        <Route path='/' element={<PhotoGallery search={search} />} />
        <Route path='/favourites' element={< Favourites search={search} />} />
      </Routes>
    </>
  )
}

export default App
