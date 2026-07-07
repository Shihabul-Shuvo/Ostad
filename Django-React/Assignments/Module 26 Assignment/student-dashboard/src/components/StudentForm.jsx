import { useState } from 'react';

function StudentForm({ onAdd }) {
  // local form state: transient input text only
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [cgpa, setCgpa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // validation: all fields filled and cgpa is numeric
    if (!name.trim() || !department.trim() || !cgpa.trim() || isNaN(parseFloat(cgpa))) {
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      department: department.trim(),
      cgpa: parseFloat(cgpa),
      isActive: true,
    };

    onAdd(newStudent);

    // reset form after submit
    setName('');
    setDepartment('');
    setCgpa('');
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        type="text"
        placeholder="CGPA"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
