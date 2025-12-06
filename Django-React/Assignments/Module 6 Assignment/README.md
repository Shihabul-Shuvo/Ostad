# Task Manager Application

## Overview:
The **Task Manager** is a Python application designed to help users manage their daily tasks effectively. This application supports basic **CRUD (Create, Read, Update, Delete)** operations and ensures persistence by saving task data to a **JSON** file. The app is built using **Object-Oriented Programming (OOP)** principles and leverages built-in Python modules like **json**, **random**, **os**, and **datetime** to handle task data and file management.

## Features:
- **Add New Task**: Users can add tasks with a title, description, and timestamp.
- **View All Tasks**: Displays a list of all tasks including their ID, title, description, and creation timestamp.
- **Update Task**: Allows users to update the title and/or description of an existing task.
- **Delete Task**: Users can delete a task by providing its unique ID.
- **Persistent Storage**: All tasks are saved in a JSON file (`tasks.json`), so data persists between application runs.

## Approach:
1. **Object-Oriented Programming (OOP)**:
   - **`Task`**: Represents a task with attributes such as `id`, `title`, `description`, and `created_at`.
   - **`TaskManager`**: Manages the list of tasks and CRUD operations, including saving and loading tasks from the JSON file.

2. **File Handling**:
   - Tasks are stored in a file named `tasks.json`. This file is read on startup to load tasks, and it is updated when tasks are added, updated, or deleted.

3. **Error Handling**:
   - The application uses `try-except` blocks to handle errors, such as invalid inputs or issues with file handling.
   
4. **JSON & Datetime**:
   - Tasks are saved in **JSON** format, and the `created_at` attribute is populated using **Python's `datetime` module**.

## How the Task Manager Works:
1. **Adding Tasks**: Users can add new tasks by providing a title and description. Each task will receive a unique, randomly generated ID.
2. **Viewing Tasks**: Users can view all tasks, which will display their ID, title, description, and the timestamp of when they were created.
3. **Updating Tasks**: Users can update the title and/or description of a task by specifying the task's unique ID.
4. **Deleting Tasks**: Users can delete a task by entering its unique ID.
5. **Exiting**: The program exits gracefully when the user selects the exit option.

## Example Output:
```bash
===== Student Task Tracker =====
1. Add New Task
2. View All Tasks
3. Update Task
4. Delete Task
5. Exit
Enter choice: 1
Task Title: Study Python
Description: Complete module 4
Task added successfully!

===== Student Task Tracker =====
1. Add New Task
2. View All Tasks
3. Update Task
4. Delete Task
5. Exit
Enter choice: 2
ID: 6408, Title: Study Python, Description: Complete module 4, Created At: 2025-12-06 21:45:40
```

## Requirements:
- **Python 3.8+**
- **Required Libraries**:
  - `json` (for handling JSON file operations)
  - `random` (for generating unique task IDs)
  - `os` (for file operations)
  - `datetime` (for adding timestamps to tasks)

## How to Run:
1. Clone or download the repository.
2. Ensure you have Python 3.8+ installed on your machine.
3. Navigate to the project directory.
4. Run the Python script:
   ```bash
   python task_manager.py
   ```

## License:
This project is open source and available under the MIT License.

## Future Enhancements:
- Implement a **search** feature to find tasks by title or description.
- Add filter method for **task prioritization** or **categorization**.
- Implement a **user authentication system** for task management across different users.
