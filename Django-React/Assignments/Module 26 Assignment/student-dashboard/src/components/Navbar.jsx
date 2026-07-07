function Navbar({ totalStudents }) {
  return (
    <nav className="navbar">
      <h1>Student Dashboard</h1>
      <span>Total Students: {totalStudents}</span>
    </nav>
  );
}

export default Navbar;
