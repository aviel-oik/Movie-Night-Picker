import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import SeatsPage from "./pages/SeatsPage"

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/MovieDetailsPage/:title' element={<MovieDetailsPage />} />
            <Route path='/SeatsPage' element={<SeatsPage />} />
          </Routes>
      </BrowserRouter>  )
}

export default App
