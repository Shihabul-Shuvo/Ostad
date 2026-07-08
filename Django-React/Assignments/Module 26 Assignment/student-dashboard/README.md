# Student Dashboard

This is my assignment project for React (Module 26). It's a simple dashboard
where you can see a list of students, add a new student, and delete one.
I built it with React + Vite using plain JavaScript (no TypeScript).

The main goal of this assignment was to practice:
- components and props
- useState
- handling events (like button clicks and form submit)
- conditional rendering (showing different things based on a condition)
- lifting state up
- component composition (using `children`)
- error boundaries

## What it does

- Shows all students as cards (name, department, CGPA, active/inactive status)
- Shows the total number of students in the navbar
- You can add a new student using the form at the top
- You can delete a student with the delete button on their card
- Shows a message depending on how many students there are (no students /
  small batch / large batch)
- There's a "Test crash" button on each card to show that the Error Boundary
  works — if one card crashes, only that part breaks and the rest of the app
  still works fine

## How to run it

```bash
npm install
npm run dev
```

Then open the link it gives you in the terminal (something like
`http://localhost:5173`).

## Folder structure

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

I tried to keep one component per file and named them the way we were taught
(PascalCase). All the components are functions except `ErrorBoundary`, which
has to be a class component since that's the only way error boundaries work
in React right now.

## Where the state lives

The list of students (and the functions to add/delete a student) all live in
`App.jsx`. Everything else just receives the data and functions as props and
uses them — this is the "lifting state up" part of the assignment. The only
thing that's kept local to its own component is the text you type into the
Add Student form, since that's just temporary input and doesn't need to be
shared anywhere else.

## Notes on specific parts

Some of these were things the assignment specifically asked to show, so I
made sure they're easy to find in the code:

- **StudentCard.jsx** — shows the active/inactive status three different
  ways in the same file (ternary, `&&`, and an IIFE), just to practice all
  three. Each one is commented so it's clear which is which.
- **BatchStatus.jsx** — the batch message is written three times using
  if/else, switch, and ternary (also commented), even though normally you'd
  only need one of these. It's there to show I understand all three.
- **Home.jsx / StudentList.jsx** — this is the `children` prop part. `Home`
  maps over the students array and builds the `StudentCard` elements, then
  passes them into `StudentList` as children instead of `StudentList` doing
  the mapping itself.
- **ErrorBoundary.jsx** — a class component that catches errors from its
  children and shows "Something went wrong. Please reload the application."
  instead of crashing the whole app.

## Assignment part → where it is

| Part | What it's about | File(s) |
|------|------|-----------------|
| 1 | Project setup | whole `src/` folder |
| 2 | Navbar | [src/components/Navbar.jsx](src/components/Navbar.jsx) |
| 3 | Student Card | [src/components/StudentCard.jsx](src/components/StudentCard.jsx) |
| 4 | Student list / data | [src/data/students.js](src/data/students.js), [src/components/StudentList.jsx](src/components/StudentList.jsx) |
| 5 | Conditional rendering | [src/components/BatchStatus.jsx](src/components/BatchStatus.jsx) |
| 6 | Add student form | [src/components/StudentForm.jsx](src/components/StudentForm.jsx) |
| 7 | Events (delete) | [src/components/StudentCard.jsx](src/components/StudentCard.jsx), [src/App.jsx](src/App.jsx) |
| 8 | Component composition | [src/pages/Home.jsx](src/pages/Home.jsx), [src/components/StudentList.jsx](src/components/StudentList.jsx) |
| 9 | Lifting state up | [src/App.jsx](src/App.jsx) |
| 10 | Error boundary | [src/components/ErrorBoundary.jsx](src/components/ErrorBoundary.jsx) |
