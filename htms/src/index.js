import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Index from './Pages/Index';
import './index.css';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Rooms from './Pages/Rooms';
import Booking from './Components/Booking';
import Dashboard from './Pages/Dashboard';
import Admin from './Pages/Admin';

export default function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Index/>}  />
      <Route path="/Index" element={<Index/>}  />
      <Route path="/About" element={<About/>}  />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Footer" element={<Footer/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Rooms" element={<Rooms/>} />
      <Route path="/Booking" element={<Booking/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Admin" element={<Admin/>} />





      
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
