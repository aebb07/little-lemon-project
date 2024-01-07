import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = ({ closeModal, isModalOpen }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({ username: '', password: '' });

  const resetInputs = () => {
    setUsername('');
    setPassword('');
    setFormErrors({ username: '', password: '' });
  };

    useEffect(() => {
      if (!isModalOpen) {
        resetInputs();
      }
    }, [isModalOpen]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setFormErrors({ ...formErrors, username: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

  const handleLoginSubmit = () => {
    if (!username) {
      setFormErrors({ ...formErrors, username: 'Username is required' });
      return;
    }

    if (!password) {
      setFormErrors({ ...formErrors, password: 'Password is required' });
      return;
    }

    console.log(`User: ${username}, Password: ${password}`);
    closeModal();
  };

  return (
    <div className={`overlay-login ${isModalOpen ? 'active' : ''}`}>
    <div className={`login ${isModalOpen ? 'modal-open' : ''}`}>
      {isModalOpen && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required/>
              {formErrors.username && <p className="error-message">{formErrors.username}</p>}

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
              {formErrors.password && <p className="error-message">{formErrors.password}</p>}

              <button type="button" onClick={handleLoginSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Login;
