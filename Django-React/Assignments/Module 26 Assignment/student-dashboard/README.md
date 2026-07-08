# Student Dashboard

A Student Dashboard built with **React + Vite** as part of a university
assignment covering components, JSX, props, events, forms, conditional
rendering, component composition, state management, and error handling.

## Tech Stack

- [React](https://react.dev/) 19 (plain JavaScript, functional components + `useState`)
- [Vite](https://vite.dev/) (dev server / build tool)
- Plain CSS (no UI/styling frameworks)

## Features

- View all students in a responsive card grid (name, department, CGPA, status)
- Live student count in the navbar
- Add a new student through a controlled form
- Delete a student from the list
- Batch status message that reacts to the number of students
  ("No Students Found" / "Small Batch" / "Large Batch")
- Per-card Error Boundary with a "Test crash" button to demonstrate graceful
  error handling — a crashing card is replaced by a fallback message while
  the rest of the dashboard keeps working

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your
browser.

### Windows Setup (Python venv)

This project itself has no Python dependencies, but if you're running any
auxiliary Python scripts/tooling alongside it on Windows, isolate them in a
virtual environment:

```powershell
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Deactivate when done:

```powershell
deactivate
```

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   ├── StudentForm.jsx
│   ├── BatchStatus.jsx
│   └── ErrorBoundary.jsx
├── pages/
│   └── Home.jsx
├── data/
│   └── students.js
├── App.jsx
├── main.jsx
└── index.css
```

## Assignment Part → Implementation Mapping

| Part | Requirement | Implemented In |
|------|-------------|-----------------|
| 1 | Project Setup (Vite app, folder structure) | Whole `src/` tree, [package.json](package.json), [vite.config.js](vite.config.js) |
| 2 | Navbar Component | [src/components/Navbar.jsx](src/components/Navbar.jsx) |
| 3 | Student Card Component (props + ternary / `&&` / IIFE status) | [src/components/StudentCard.jsx](src/components/StudentCard.jsx) |
| 4 | Student List (data array + `students.map()`) | [src/data/students.js](src/data/students.js), [src/components/StudentList.jsx](src/components/StudentList.jsx), [src/pages/Home.jsx](src/pages/Home.jsx) |
| 5 | Conditional Rendering (batch message: if/else, switch, ternary) | [src/components/BatchStatus.jsx](src/components/BatchStatus.jsx) |
| 6 | Add Student Form (controlled inputs, `preventDefault`) | [src/components/StudentForm.jsx](src/components/StudentForm.jsx) |
| 7 | Events (Delete button removes a student) | [src/components/StudentCard.jsx](src/components/StudentCard.jsx), [src/App.jsx](src/App.jsx) (`deleteStudent`) |
| 8 | Component Composition (`children` prop) | [src/pages/Home.jsx](src/pages/Home.jsx), [src/components/StudentList.jsx](src/components/StudentList.jsx) |
| 9 | Lifting State Up (student data lives in `App`) | [src/App.jsx](src/App.jsx) |
| 10 | Error Boundary (class component, fallback UI) | [src/components/ErrorBoundary.jsx](src/components/ErrorBoundary.jsx) |
