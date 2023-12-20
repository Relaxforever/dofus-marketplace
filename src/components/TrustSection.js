import React from 'react';
import './TrustSection.css'; // Make sure to create this CSS file

function TrustSection() {
  return (
    <>
    <div className='trust-section-cont'>
        <div className='trust-section-title'>
        <h2>
            <span className="trust-span">NUESTROS CLIENTES</span> NOS AMAN
        </h2>
        <p>En consecuencia, nuestra misión tiene como núcleo principal tu satisfacción.</p>
        </div>
        
        <div className="trust-section">
        <div className="trust-item">
            <div className="trust-icon"> {/* Icon placeholder */} </div>
            <h3>SERVICIO AL CLIENTE</h3>
            <p>4.9/5</p>
        </div>
        <div className="trust-item">
            <div className="trust-icon"> {/* Icon placeholder */} </div>
            <h3>EL TIEMPO DE ENTREGA</h3>
            <p>4.9/5</p>
        </div>
        <div className="trust-item">
            <div className="trust-icon"> {/* Icon placeholder */} </div>
            <h3>PAGOS SEGUROS</h3>
            <p>5/5</p>
        </div>
        <div className="trust-item">
            <div className="trust-icon"> {/* Icon placeholder */} </div>
            <h3>DISPONIBILIDAD STOCK</h3>
            <p>4.95/5</p>
        </div>
        <div className="trust-item">
            <div className="trust-icon"> {/* Icon placeholder */} </div>
            <h3>GARANTÍA DE DEVOLUCIÓN DEL DINERO</h3>
            <p>4.95/5</p>
        </div>
        <div className="trust-item">
            <div className="trust-icon"> {/* Icon placeholder */} </div>
            <h3>PREMIO</h3>
            <p>4.9/5</p>
        </div>
        </div>
    </div>
    </>
  );
}

export default TrustSection;
