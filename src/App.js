import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:8000/api/students/');
    setStudents(res.data);
  };

  const addStudent = async (student) => {
    await axios.post('http://localhost:8000/api/students/', student);
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8000/api/students/${id}/`);
    fetchStudents();
  };

  useEffect(() => { fetchStudents(); }, []);

  return (
    <div className="container">
      <h1>Student Manager</h1>
      <StudentForm onAdd={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
}

export default App;
