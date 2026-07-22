import { useEffect, useRef, useState } from 'react'

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const inputRef = useRef(null)

  // Focus the input as soon as the form mounts.
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    // Ignore empty or whitespace-only submissions.
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    const newTask = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
    }

    onAddTask(newTask)
    setTitle('') // clear the field for the next task
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTaskForm
