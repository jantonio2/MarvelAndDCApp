import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          ASOCIACIONES
        </NavLink>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarText'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <NavLink to='/marvel' className='nav-link'>
                Marvel
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to='/dc' className='nav-link'>
                DC
              </NavLink>
            </li>
          </ul>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <NavLink to='/login' className='nav-link'>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
