import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { TasksProvider } from './context/TasksContext.jsx'
import './index.css'
import App from './App.jsx'

// Providers wrap everything here (not inside a page) so theme + tasks
// stay put no matter which route is showing.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TasksProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TasksProvider>
    </ThemeProvider>
  </StrictMode>,
)
