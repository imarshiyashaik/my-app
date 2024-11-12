import React,{useState} from 'react'
import './Navbar.css';

import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
 
export default function Navbar(){
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <Router>
    <nav className='navbar'>
        <div className='navbar-logo'></div>
        <div>Website</div>
        <div className='menu' onClick={toggleMenu}>
            <div className='menu-icon'></div>
            <div className='menu-icon'></div>
            <div className='menu-icon'></div>
        </div>
        <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
            <li>
                <NavLink to='/' onClick={toggleMenu}> Home</NavLink>
            </li>
            <li><NavLink to='/About' onClick={toggleMenu}> About</NavLink></li>
            <li><NavLink to ='/Services' onClick={toggleMenu}> Services</NavLink></li>
            <li><NavLink to='/Contact' onClick={toggleMenu}> Contact</NavLink></li>
        </ul>
    </nav>
    <Routes>
      <Route path= '/'element={<Home/>}/>
      <Route path= '/About'element={<About/>}/>
      <Route path= '/Services'element={<Services/>}/>
      <Route path= '/Contact'element={<Contact/>}/>

    </Routes>
    </Router>
    )
}