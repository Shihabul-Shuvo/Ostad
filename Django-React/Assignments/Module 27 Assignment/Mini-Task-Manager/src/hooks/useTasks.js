import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext.jsx'

// Grabs the shared task list + actions from TasksContext.
// Same idea as useTheme - one hook instead of repeating useContext everywhere.
export function useTasks() {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('useTasks must be used inside a TasksProvider')
  }

  return context
}
