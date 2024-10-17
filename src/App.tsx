import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WashingMachinePage from './pages/WashingMachinePage';
import NumbersPage from './pages/NumbersPage';
import EmployeeInfoPage from './pages/EmployeeInfoPage';
import NavBarComponent from './components/NavBarComponent';

function App() {

  return (
    <>
    <NavBarComponent />
    <Router>
      <Routes>
        <Route path="/" element={<WashingMachinePage />} />
        <Route path="/numbers" element={<NumbersPage />} />
        <Route path="/employee-info" element={<EmployeeInfoPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
