import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Asegúrate de crear este archivo CSS para estilizar

function Home() {
    const navigate = useNavigate();

  const navigateToMarketplace = (gameType) => {
    navigate(`/${gameType}-kamas`);
  };

  return (
    <div className="home-container">
      <div className="home-banner">
        {/* Banner o imagen de fondo si es necesario */}
      </div>
      <div className="game-selection-container">
        <div className="game-option dofus" onClick={() => navigateToMarketplace('dofus')}>
          <h2>Dofus & Dofus Retro Kamas</h2>
          {/* Lista de servidores y detalles si es necesario */}
        </div>
        <div className="game-option dofus-touch" onClick={() => navigateToMarketplace('dofus-touch')}>
          <h2>Dofus Touch Kamas</h2>
          {/* Lista de servidores y detalles si es necesario */}
        </div>
      </div>
      <div className="home-info">
        {/* Información adicional como en la imagen proporcionada */}
      </div>
    </div>
  );
}

export default Home;
