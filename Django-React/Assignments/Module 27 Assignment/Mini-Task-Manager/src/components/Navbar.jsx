import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme.js'

// NavLink calls this with isActive so the current page's link gets styled differently.
function getLinkClassName({ isActive }) {
  return isActive ? 'active-link' : undefined
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/" end className={getLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClassName}>
          About
        </NavLink>
      </div>
      {/* icon shows the mode you'll switch TO, not the current one */}
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {isLight ? <MoonIcon /> : <SunIcon />}
      </button>
    </nav>
  )
}

export default Navbar
