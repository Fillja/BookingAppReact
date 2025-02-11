import React from 'react';
import logo from '@images/logo.png';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {

  const pathname = useLocation().pathname;
  console.log(pathname);

  return (
    <section className="header-section bg-light">

      <div className="container">
        
        <NavLink className="logo-wrapper" to="/">
          <img className="logo-img" src={logo} />
        </NavLink>

        <nav className="navigation-wrapper">
          <ul className="link-list">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link link' : 'link')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link link' : 'link')}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link link' : 'link')}>Contact</NavLink>
          </ul>
        </nav>

        <div className="social-wrapper">
          <a className="icon-wrapper link" href="https://linkedin.com" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a className="icon-wrapper link" href="https://facebook.com" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </div>

      </div>

    </section>
  )
}

export default Header