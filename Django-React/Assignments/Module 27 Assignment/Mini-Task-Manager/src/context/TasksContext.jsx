import { createContext, useEffect, useState } from 'react'

// Holds the task list at the app root (not inside a page) so it survives
// navigating between Home and About instead of resetting on every route change.
export const TasksContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch a few sample tasks once when the app first loads.
  useEffect(() => {
    // React runs effects twice in dev (StrictMode). This flag stops the
    // first, throwaway run from applying its result after the second one wins.
    let ignore = false

    async function fetchTasks() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        )
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        if (!ignore) {
          // Put fetched tasks first, keep anything the user already added.
          setTasks((prev) => [...data, ...prev])
        }
      } catch {
        if (!ignore) {
          setError('Failed to load tasks. Please try again later.')
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    fetchTasks()

    return () => {
      ignore = true
    }
  }, [])

  function addTask(newTask) {
    // Spread into a new array instead of pushing, so React sees a new
    // reference and re-renders.
    setTasks((prev) => [...prev, newTask])
  }

  function toggleTask(id) {
    // Map to a new array with the matching task swapped out, rather than
    // mutating the task in place.
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <TasksContext.Provider
      value={{ tasks, loading, error, addTask, toggleTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}
