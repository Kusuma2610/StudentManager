import React, { useState } from 'react';

const StudentForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', email: '', roll_number: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: '', email: '', roll_number: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="roll_number" placeholder="Roll No" value={form.roll_number} onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default StudentForm;