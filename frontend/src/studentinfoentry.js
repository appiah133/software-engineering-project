import React from 'react';
import './css/Studententryinfo.css'
import { Link } from 'react-router-dom'

const StudentInfoEntryPage = () => {
  return (
    <div class="container">
    <h1>Student Information Entry</h1>
    <form>
      <div class="form-group">
        <label for="student-id">Student ID:</label>
        <input type="text" id="student-id" name="student-id" required />
      </div>
      
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      
      <div class="form-group">
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required />
      </div>
      
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <input type="submit" value="Submit" />
      <Link to='/dashboard'><button>Dashboard</button></Link>
    </form>
  </div>
  );
};

export default StudentInfoEntryPage;
