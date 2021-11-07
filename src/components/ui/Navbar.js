import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './../../auth/AuthContext';

export const Navbar = () => {

  const {user:{name}} = useContext(AuthContext)
  
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          ASOCIACIONES
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/marvel' className='nav-link'>
                Marvel
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/dc' className='nav-link'>
                DC
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/search' className='nav-link'>
                Search
              </NavLink>
            </li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <span className="nav-link text-info">
                {name}
              </span>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link'>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
