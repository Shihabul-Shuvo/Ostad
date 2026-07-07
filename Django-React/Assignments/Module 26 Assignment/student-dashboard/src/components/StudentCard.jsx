import { useState } from 'react';

function StudentCard({ student, onDelete }) {
  const { id, name, department, cgpa, isActive } = student;
  const [shouldCrash, setShouldCrash] = useState(false);

  // thrown during render (not in the click handler) so the Error Boundary can catch it
  if (shouldCrash) {
    throw new Error('Test crash triggered for student card: ' + name);
  }

  // ternary: status text
  const statusText = isActive ? 'Active' : 'Inactive';

  // IIFE: compute the status badge's className
  const statusClass = (() => {
    if (isActive) {
      return 'status-badge status-active';
    }
    return 'status-badge status-inactive';
  })();

  return (
    <div className="student-card">
      <h3 className="student-name">{name}</h3>
      <p className="student-department">{department}</p>
      <p className="student-cgpa">CGPA: {cgpa}</p>

      <span className={statusClass}>{statusText}</span>

      {/* logical && : inactive warning note, only rendered when inactive */}
      {!isActive && <p className="inactive-note">⚠ This student is inactive</p>}

      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>

      <button
        type="button"
        className="crash-btn"
        onClick={() => setShouldCrash(true)}
      >
        Test crash
      </button>
    </div>
  );
}

export default StudentCard;
