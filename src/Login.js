import React, { useState } from 'react';
import './Login.css'; // No olvides crear este archivo para los estilos

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = () => {
    // Aquí iría la lógica de autenticación, por ejemplo, hacer una solicitud a un servidor
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />

        <button type="button" onClick={handleLoginSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
