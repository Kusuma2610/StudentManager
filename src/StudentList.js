import React from 'react';

const StudentList = ({ students, onDelete }) => {
  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Email</th><th>Roll No</th><th>Action</th></tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.roll_number}</td>
            <td><button onClick={() => onDelete(s.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;