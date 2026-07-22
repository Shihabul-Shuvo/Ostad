import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleTask }) {
  if (tasks.length === 0) {
    return <p>No tasks yet.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        // onToggleTask just passes through to each item - TaskManager owns the actual state update
        <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} />
      ))}
    </ul>
  )
}

export default TaskList
