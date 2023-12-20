import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderPagina from '../images/HeaderPagina.png';
import './Header.css'; // Asegúrate de crear este archivo CSS para estilizar

function Header() {
  // Estados para manejar la visibilidad de los menús desplegables
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [currency, setCurrency] = useState('EUR');
  const loggedIn = false; // Cambia esto según el estado de inicio de sesión del usuario

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={HeaderPagina} alt="HeaderPagina" className="game-header" />
        </Link>
      </div>
      <nav className="navigation">
        <Link to="/dofus-kamas">DOFUS KAMAS</Link>
        <Link to="/dofus-touch-kamas">DOFUS TOUCH KAMAS</Link>
        <Link to="/support">SOPORTE VITAL</Link>
      </nav>
      <div className="header-right">
      <div className="currency-selector">
        {currency}
        <div className="currency-options">
          <div className="currency-option" onClick={() => setCurrency('EUR')}>EUR</div>
          <div className="currency-option" onClick={() => setCurrency('USD')}>USD</div>
          <div className="currency-option" onClick={() => setCurrency('GBP')}>GBP</div>
          <div className="currency-option" onClick={() => setCurrency('COP')}>COP</div>
        </div>
      </div>
      <div className="user-account" onMouseEnter={() => setShowUserOptions(true)} onMouseLeave={() => setShowUserOptions(false)}>
        {loggedIn ? 'Cuenta' : 'Iniciar Sesión'}
        {showUserOptions && (
          <div className="user-options">
            {loggedIn ? (
              <>
                <div className="user-option">Perfil</div>
                <div className="user-option">Pedidos</div>
                <div className="user-option">Cerrar Sesión</div>
              </>
            ) : (
              <>
                <div className="user-option" onClick={() => {/* lógica para ir al formulario de inicio de sesión */}}>Iniciar Sesión</div>
                <div className="user-option" onClick={() => {/* lógica para ir al formulario de registro */}}>Registrar</div>
              </>
            )}
          </div>
        )}
      </div>
        {/* El carrito de compras se ignora por ahora */}
      </div>
    </header>
  );
}

export default Header;
