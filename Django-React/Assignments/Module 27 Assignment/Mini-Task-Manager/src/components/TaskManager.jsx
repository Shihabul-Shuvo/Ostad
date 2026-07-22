import { useEffect, useRef } from 'react'
import { useTasks } from '../hooks/useTasks.js'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

function TaskManager() {
  const { tasks, loading, error, addTask, toggleTask } = useTasks()
  const counterRef = useRef(null)

  // Update the counter text straight through the ref (rather than JSX)
  // any time the task list changes - just here for useRef practice.
  useEffect(() => {
    if (counterRef.current) {
      counterRef.current.innerText = `Tasks: ${tasks.length}`
    }
  }, [tasks])

  return (
    <div className="card">
      <h1>Mini Task Manager</h1>
      <p className="task-counter" ref={counterRef}>Tasks: 0</p>
      <AddTaskForm onAddTask={addTask} />
      {loading ? (
        <p>Loading tasks...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <TaskList tasks={tasks} onToggleTask={toggleTask} />
      )}
    </div>
  )
}

export default TaskManager
