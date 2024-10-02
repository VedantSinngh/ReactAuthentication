import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Ensure you import Route
import User from './components/User'
import SignUp from './components/SignUp'; 
import Login from './components/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/user" element={<User />} /> 
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
