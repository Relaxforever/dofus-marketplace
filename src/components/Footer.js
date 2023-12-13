import React from 'react';
import './Footer.css'; // Suponiendo que tenemos un archivo CSS para estilos
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h4>A PROPÓSITO DE NOSOTROS</h4>
        {/* Contenido sobre nosotros */}
      </div>
      <div className="footer-section links">
        <h4>ENLACE RÁPIDO</h4>
        <Link to="/vip-bonus">Bono VIP</Link>
        <Link to="/order-history">Historial de pedidos</Link>
        {/* Otros enlaces rápidos */}
      </div>
      <div className="footer-section info">
        <h4>INFORMACIÓN</h4>
        <Link to="/faq">Preguntas frecuentes</Link>
        <Link to="/terms">Términos y condiciones</Link>
        {/* Más información */}
      </div>
      <div className="footer-section contact">
        <h4>CONTACTAR</h4>
        {/* Detalles de contacto */}
      </div>
      <div className="footer-section payment-methods">
        {/* Logos de métodos de pago */}
      </div>
    </footer>
  );
}

export default Footer;
