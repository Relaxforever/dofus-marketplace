import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear este archivo CSS para estilizar

function Header() {
  // Estados para manejar la visibilidad de los menús desplegables
  const [currencyHover, setCurrencyHover] = useState(false);
  const [userHover, setUserHover] = useState(false);
  const loggedIn = false; // Cambia esto según el estado de inicio de sesión del usuario

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Kamaspascher</Link>
      </div>
      <nav className="navigation">
        <Link to="/dofus-kamas">DOFUS KAMAS</Link>
        <Link to="/dofus-touch-kamas">DOFUS TOUCH KAMAS</Link>
        <Link to="/support">SOPORTE VITAL</Link>
      </nav>
      <div className="header-right">
        <div className="currency-selector"
             onMouseEnter={() => setCurrencyHover(true)}
             onMouseLeave={() => setCurrencyHover(false)}>
          € EURO
          {currencyHover && (
            <div className="currency-options">
              {/* Reemplaza con componentes o elementos reales según sea necesario */}
              <div>USD</div>
              <div>GBP</div>
              <div>COP</div>
            </div>
          )}
        </div>
        <div className="user-account"
             onMouseEnter={() => setUserHover(true)}
             onMouseLeave={() => setUserHover(false)}>
          {/* Icono de cuenta de usuario */}
          {userHover && (
            <div className="user-options">
              {loggedIn ? (
                <>
                  <Link to="/edit-account">Editar Cuenta</Link>
                  <Link to="/order-history">Historial de Pedidos</Link>
                  <Link to="/logout">Cerrar Sesión</Link>
                </>
              ) : (
                <>
                  <Link to="/register">Registrarse</Link>
                  <Link to="/login">Conectarse</Link>
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
