import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from './../../auth/AuthContext';
import { types } from './../../types/types';

export const LoginScreen = () => {
  // Definir (En la documentacion esta como let)
  let history = useHistory();
  const {dispatch} = useContext(AuthContext)
  const handleLogin = () => {
    // history.push('/');
    const lasthPath = localStorage.getItem('lastPath') || '/'
    
    const newUser = {name: 'Antonio'}
    dispatch({
      type: types.login,
      payload: newUser
    })
    
    history.replace(lasthPath)
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Ingresar
      </button>
    </div>
  )
}
