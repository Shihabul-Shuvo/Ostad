# Assignment: Student Dashboard Using React + Vite

## Objective

Build a **Student Dashboard** application using **React + Vite** by applying the concepts covered in class, including:

- Components
- JSX
- Props
- Events
- Forms
- Conditional Rendering
- Component Composition
- State Management
- Error Handling

---

## Requirements

## Part 1: Project Setup

Create a new React application using **Vite**.

You must:

- Create a new React application using Vite.
- Run the project successfully.
- Organize the project folders properly.

### Example Folder Structure

```text
src/
│
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   ├── StudentForm.jsx
│   ├── ErrorFallback.jsx
│
├── pages/
│   └── Home.jsx
│
├── data/
│   └── students.js
│
├── App.jsx
└── main.jsx
```

---

## Part 2: Navbar Component

Create a reusable **Navbar** component.

It should display:

- `Student Dashboard`
- `Total Students: 0`

The total number of students should update dynamically.

---

## Part 3: Student Card Component

Create a reusable **StudentCard** component.

Pass the following data using **props**:

- Name
- Department
- CGPA
- Active Status

Display the student information in a clean card layout.

### Conditional Rendering

Display the student's status as:

- **Active** if the student is active.
- **Inactive** otherwise.

Use the following JSX techniques:

- Ternary Operator
- Logical `&&`
- Immediately Invoked Function Expression, also known as IIFE

---

## Part 4: Student List

Create an array of student objects.

### Example

```js
[
  {
    id: 1,
    name: "Rahim",
    department: "CSE",
    cgpa: 3.75,
    isActive: true
  }
]
```

Render all students using:

```js
students.map(...)
```

---

## Part 5: Conditional Rendering

Display different messages based on the total number of students.

| Condition | Message |
|---|---|
| No students | `No Students Found` |
| 1–5 students | `Small Batch` |
| More than 5 students | `Large Batch` |

Use the following approaches:

- `if...else`
- `switch` statement
- Ternary operator

---

## Part 6: Add Student Form

Create a form with the following fields:

- Student Name
- Department
- CGPA

### Requirements

- Use Controlled Components.
- Prevent page refresh using `preventDefault()`.
- Add the new student to the student list after form submission.

---

## Part 7: Events

Each student card should have a **Delete** button.

When clicked, remove the corresponding student from the list.

---

## Part 8: Component Composition

Organize your components as follows:

```jsx
<App>
  <Navbar />
  <StudentList>
    <StudentCard />
  </StudentList>
</App>
```

Use the `children` prop wherever appropriate.

---

## Part 9: Lifting State Up

Store the student data in the **App** component.

Pass the data and necessary functions to child components using **props**.

---

## Part 10: Error Boundary

Create an **Error Boundary** component.

If a `StudentCard` crashes intentionally, the application should display the following fallback UI instead of crashing completely:

```text
Something went wrong.
Please reload the application.
```

---

# Submission Requirements

Submit the following:

- Complete project source code
- `README.md`
- GitHub repository link

## Final Project Structure

```text
student-dashboard/
│
├── src/
├── public/
├── package.json
├── README.md
└── GitHub Repository Link
```
