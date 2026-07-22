import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'

// Grabs the current theme + toggle function from ThemeContext.
// Keeps components from importing useContext + ThemeContext everywhere.
export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider')
  }

  return context
}
