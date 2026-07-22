function TaskItem({ task, onToggleTask }) {
  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      <label>
        {/* checking the box just reports the id up - the parent decides how to update state */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span>{task.title}</span>
      </label>
    </li>
  )
}

export default TaskItem
