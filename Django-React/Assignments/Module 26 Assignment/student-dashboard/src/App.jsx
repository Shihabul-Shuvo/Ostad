import { useState } from 'react';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';
import StudentCard from './components/StudentCard';
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

  // component composition: build the card elements here, pass them down as children
  const studentCards = students.map((s) => (
    <ErrorBoundary key={s.id}>
      <StudentCard student={s} onDelete={deleteStudent} />
    </ErrorBoundary>
  ));

  return (
    <ErrorBoundary>
      <Home students={students} addStudent={addStudent}>
        {studentCards}
      </Home>
    </ErrorBoundary>
  );
}

export default App;
