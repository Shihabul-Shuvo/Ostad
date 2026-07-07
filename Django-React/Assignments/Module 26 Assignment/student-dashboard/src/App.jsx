import { useState } from 'react';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';
import initialStudents from './data/students';

function App() {
  const [students, setStudents] = useState(initialStudents);

  // lifted state: add a new student
  function addStudent(newStudent) {
    setStudents((prev) => [...prev, newStudent]);
  }

  // lifted state: remove a student by id
  function deleteStudent(id) {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <ErrorBoundary>
      <Home students={students} addStudent={addStudent} deleteStudent={deleteStudent} />
    </ErrorBoundary>
  );
}

export default App;
