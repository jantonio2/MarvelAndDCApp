import React from 'react';
import { useHistory } from 'react-router';

export const LoginScreen = () => {
  // Definir (En la documentacion esta como let)
  const history = useHistory();

  const handleLogin = () => {
    // history.push('/');
    history.replace('/');
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
