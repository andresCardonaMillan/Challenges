import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../stylesheets/Navbar.css';
import {Home} from '../pages/Home'
import {About} from '../pages/About'
import {Login} from '../pages/Login'
import {Shop} from '../pages/Shop'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>

    </>
  );
};

