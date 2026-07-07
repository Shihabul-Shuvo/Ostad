import Navbar from '../components/Navbar';
import StudentForm from '../components/StudentForm';
import BatchStatus from '../components/BatchStatus';
import StudentList from '../components/StudentList';
import StudentCard from '../components/StudentCard';
import ErrorBoundary from '../components/ErrorBoundary';

function Home({ students, addStudent, deleteStudent }) {
  return (
    <>
      <Navbar totalStudents={students.length} />
      <StudentForm onAdd={addStudent} />
      <BatchStatus count={students.length} />
      <StudentList>
        {students.map((s) => (
          <ErrorBoundary key={s.id}>
            <StudentCard student={s} onDelete={deleteStudent} />
          </ErrorBoundary>
        ))}
      </StudentList>
    </>
  );
}

export default Home;
