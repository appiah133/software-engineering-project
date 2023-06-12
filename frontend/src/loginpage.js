import React from 'react';
import './css/loginpage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div class="container">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        
        <input type="submit" value="Login" />
        <Link to='/dashboard'><button>Dashboard</button></Link>
      </form>
  </div>
  );
};

export default LoginPage;
