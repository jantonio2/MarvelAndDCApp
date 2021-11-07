import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from './../../auth/AuthContext';
import { types } from './../../types/types';

export const Navbar = () => {

  const {user:{name}, dispatch} = useContext(AuthContext)
  const history = useHistory();
  const handleLogout = () => {
    dispatch({
      type: types.logout
    })
    history.replace('/login')
  }
  
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          ASOCIACIONES
        </NavLink>
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
              <button 
                className='nav-link btn'
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
