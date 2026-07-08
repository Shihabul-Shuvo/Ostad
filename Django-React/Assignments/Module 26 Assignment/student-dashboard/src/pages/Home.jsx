import Navbar from '../components/Navbar';
import StudentForm from '../components/StudentForm';
import BatchStatus from '../components/BatchStatus';
import StudentList from '../components/StudentList';

function Home({ students, addStudent, children }) {
  return (
    <>
      <Navbar totalStudents={students.length} />
      <StudentForm onAdd={addStudent} />
      <BatchStatus count={students.length} />
      <StudentList>{children}</StudentList>
    </>
  );
}

export default Home;
