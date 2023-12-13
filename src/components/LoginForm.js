import React, { useState } from 'react';
import './LoginForm.css'; // Asegúrate de crear este archivo CSS para estilizar

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío del formulario
  };

  return (
    <div className="login-overlay">
      <div className="login-form">
        <h2>INFORMACIÓN DE CUENTA</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Dirección de correo electrónico"
            required
          />
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            required
          />
          <a href="#" className="forgot-password">contraseña olvidada</a>
          <button type="submit" className="login-button">CONECTARSE</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
