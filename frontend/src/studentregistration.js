import React from 'react';
import './css/studentregistrationpage.css';
import { Link } from 'react-router-dom'

const RegistrationPage = () => {
  return (
    <div className="container" style={{margin:'100px auto'}}>
      <h1>Student Registration</h1>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"  />
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <input type="submit" value="Register" />
        <Link to='/dashboard'><button>Dashboard</button></Link>
        
      </form>
    </div>
  );
};

export default RegistrationPage;
