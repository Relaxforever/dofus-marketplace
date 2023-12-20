import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import AnutrofMale from '../images/AnutrofMale.png';
import AnutrofMaleToque from '../images/AnutrofMaleToque.png';
import TrustSection from './TrustSection';
import FAQSection from './FAQSection';

function Home() {
  const navigate = useNavigate();

  const navigateToMarketplace = (gameType) => {
    navigate(`/${gameType}-kamas`);
  };

  return (
    <div className="home-container">
      <div className="game-selection-container">
        <div className="game-option dofus" onClick={() => navigateToMarketplace('dofus')}>
          <img src={AnutrofMale} alt="Dofus" className="game-image" />
          <div className="game-info">
            <h2>Dofus & Dofus Retro Kamas</h2>
              <h3>Dofus</h3>
              <p>Imagiro, Draconicos, Orukam, Shadow, TalKasha, Hellmina, Tylezia.</p>
              <h3>Dofus Retro</h3>
              <p>Boune, Eratz, Henual, Crail, Galgarion</p>
              <h3>Tiempo de Entrega</h3>
              <p>5 minutos (95% de los pedidos) a 24 horas</p>
              <h3>Forma de entrega</h3>
              <p>Astrub, cara a cara</p>
            
          </div>
        </div>
        <div className="game-option dofus" onClick={() => navigateToMarketplace('dofustouch')}>
          <img src={AnutrofMaleToque} alt="Dofus" className="game-image" />
          <div className="game-info">
            <h2>Dofus Touch</h2>
              <h3>Dofus Touch</h3>
              <p>Hezdegrize, Oshimo, Dodge, Grandapan</p>
              <h3>Tiempo de Entrega</h3>
              <p>5 minutos (95% de los pedidos) a 24 horas</p>
              <h3>Forma de entrega</h3>
              <p>Astrub, cara a cara</p>
          </div>
        </div>
      </div>
      <div className="home-info">
        <TrustSection />
        <FAQSection />
      </div>
    </div>
  );
}

export default Home;

