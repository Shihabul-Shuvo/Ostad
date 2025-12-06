import json
import random
import os
from datetime import datetime

class Task:
    def __init__(self, title, description):
        """Initialize new task with title, description, and Datetime."""
        self.id = random.randint(1000, 9999)  # to generate random ID
        self.title = title
        self.description = description
        self.created_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def convert_to_dict(self):
        """Dictionary format task for saving as JSON."""
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "created_at": self.created_at
        }

class TaskManager:
    """CRUD operations and file handling."""
    def __init__(self, filename="tasks.json"):
        """TaskManager file loading."""
        self.filename = filename
        self.tasks = []
        self.load_from_file()

    def add_task(self, title, description):
        """Add new task to task list."""
        new_task = Task(title, description)
        self.tasks.append(new_task)
        print("Task added successfully!")
        self.save_to_file()

    def view_tasks(self):
        """View all tasks."""
        if not self.tasks:
            print("No tasks to display.")
            return
        for task in self.tasks:
            print(f"ID: {task.id}, Title: {task.title}, Description: {task.description}, Created At: {task.created_at}")

    def update_task(self, task, title=None, description=None):
        """Update a task by ID."""
        try:
            if title:
                task.title = title
            if description:
                task.description = description
            print(f"Task {task.task_id} is updated successfully!")
            print(f"New Title: {task.title}, New Description: {task.description}")
            
            self.save_to_file()
        except ValueError as e:
            print(e)

    def delete_task(self, task_id):
        """Delete a task by ID."""
        try:
            task = self.get_task_by_id(task_id)
            self.tasks.remove(task)
            print(f"Task with ID {task_id} deleted successfully!")
            self.save_to_file()
        except ValueError as e:
            print(e)

    def get_task_by_id(self, task_id):
        """Get a task by ID."""
        for task in self.tasks:
            if task.id == task_id:
                return task
        raise ValueError(f"Task with ID {task_id} not found.")

    def save_to_file(self):
        """Save all tasks to a JSON file."""
        try:
            with open(self.filename, "w") as file:
                json.dump([task.convert_to_dict() for task in self.tasks], file, indent=4)
        except Exception as e:
            print(f"Error saving tasks to file: {e}")

    def load_from_file(self):
        """Load tasks from the JSON file."""
        if not os.path.exists(self.filename):
            return  # If file doesn't exist, no tasks to load

        try:
            with open(self.filename, "r") as file:
                data = json.load(file)
                self.tasks = [Task(task['title'], task['description']) for task in data]
                for i, task in enumerate(self.tasks):
                    self.tasks[i].id = data[i]['id']
                    self.tasks[i].created_at = data[i]['created_at']
        except json.JSONDecodeError:
            print("Error reading from file: Invalid JSON.")
        except FileNotFoundError:
            print("File not found. Starting with an empty task list.")

# Main function to interact with the user
def main():
    task_manager = TaskManager()

    while True:
        print("\n===== Student Task Tracker =====")
        print("1. Add New Task")
        print("2. View All Tasks")
        print("3. Update Task")
        print("4. Delete Task")
        print("5. Exit")
        choice = input("Enter choice: ")

        if choice == '1':
            title = input("Task Title: ")
            description = input("Description: ")
            task_manager.add_task(title, description)

        elif choice == '2':
            task_manager.view_tasks()

        elif choice == '3':
            try:
                task_id = int(input("Enter Task ID to update: "))
                
                task = task_manager.get_task_by_id(task_id)
                if(task):
                    print(f"Current Title: {task.title}, Current Description: {task.description}")
                    try:
                        new_title = input("New Title (leave blank to keep current): ")
                        new_description = input("New Description (leave blank to keep current): ")
                        task_manager.update_task(task, new_title if new_title else None, new_description if new_description else None)
                    except Exception as e:
                        print(f"Error updating task: {e}")
            except ValueError:
                print("Invalid Task ID.")

        elif choice == '4':
            try:
                task_id = int(input("Enter Task ID to delete: "))
                task_manager.delete_task(task_id)
            except ValueError:
                print("Invalid Task ID.")

        elif choice == '5':
            print("Exiting...")
            break

        else:
            print("Invalid input. Please try again.")

if __name__ == "__main__":
    main()
