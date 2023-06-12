import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DashboardPage from './dashboard';
import StudentEntryInfo from './studentinfoentry';
import RegistrationPage from './studentregistration';
import LoginPage from './loginpage';


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/student_info" element={<StudentEntryInfo/>} />
            <Route path="/register" element={<RegistrationPage/>} />           
            <Route path="/dashboard" element={<DashboardPage/>} />           
          </Routes>
      </Router>
      
    </>
    
  );
}

export default App;

