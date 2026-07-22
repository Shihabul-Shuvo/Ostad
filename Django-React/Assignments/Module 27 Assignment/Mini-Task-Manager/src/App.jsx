import { Route, Routes } from 'react-router-dom'
import { useTheme } from './hooks/useTheme.js'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  // theme drives which CSS variables are active (see .light/.dark in index.css)
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
