# Mini Task Manager

A lightweight task-tracking app built with React. It lets you add tasks, check them off as complete, and starts you off with a few sample tasks pulled from a public API on first load. The project doubles as a practice ground for core React concepts: hooks, data fetching, routing, and the Context API.

## Features

- State managed with `useState`, updated immutably with the spread operator and `Array.map` (never mutating tasks in place).
- `useRef` used two ways: auto-focusing the "add task" input on load, and updating a task counter directly through the DOM.
- Sample tasks fetched from `jsonplaceholder.typicode.com` inside `useEffect`, with a loading indicator and error fallback.
- Tasks can be checked off / unchecked, with a struck-through style for completed items.
- Two-page navigation (`/` and `/about`) using React Router's `NavLink`, with the current page highlighted.
- Light/dark theme switching backed by a Context provider, accessible from an icon button in the navbar.

## Tech Stack

- React
- Vite
- react-router-dom

## How to Run

Install dependencies and start the dev server:

```
npm install
npm run dev
```

Once running, open the app at http://localhost:5173.

## Project Structure

| Path | Contains |
|---|---|
| `src/components/` | UI building blocks - `Navbar`, `TaskManager`, `AddTaskForm`, `TaskList`, `TaskItem` |
| `src/pages/` | The two routed pages - `Home` (task manager) and `About` |
| `src/context/` | Context providers - `ThemeContext` (light/dark) and `TasksContext` (shared task state across routes) |
| `src/hooks/` | Custom hooks - `useTheme` and `useTasks`, thin wrappers around the context above |
