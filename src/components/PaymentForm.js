import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PaymentForm.css'; // Make sure your CSS file is named PaymentForm.css
import AnutrofMale from '../images/AnutrofMale.png';
import AnutrofMaleToque from '../images/AnutrofMaleToque.png';

// Mock data for the servers
const servers = [
  'Draconiros', 'infiernomina', 'Imagiro', 'Sombra', 'Orukam', 'talkasha',
  'tyleria', 'boune', 'Crail', 'Eratz', 'galgarion'
];

function PaymentForm({ onConfirmOrder }) {
  const [orderDetails, setOrderDetails] = useState({
    server: servers[0], // Default to the first server in the list
    characterName: '',
    amount: '',
    totalCost: ''
  });
  let { gameType } = useParams();
  const [gameData, setGameData] = useState(null);
  const [characterImage, setCharacterImage] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      console.log(gameType)
      if (gameType === 'dofus') {
        setCharacterImage(AnutrofMale); 
      } else if (gameType === 'dofus-touch') {
        setCharacterImage(AnutrofMaleToque);
      }
    };

    fetchData();
  }, [gameType]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirmOrder(orderDetails);
  };

  return (
    <div className="payment-page-container">
      <aside className="sidebar">
        <h2></h2>
        <div className="sidebar-content">
          <img src={gameType === 'dofus' ? AnutrofMale : AnutrofMaleToque} alt="Anutrof Character" className="character-image" />
          {/* Sidebar content such as tips and warnings will go here. Adjust as per your content */}
          <div className="tips">
            <p>TRUCO: Puede ingresar la Cantidad o la Cantidad como tu deseas</p>
            <p>BONO VIP: Hasta 5% bono para clientes registrados</p>
            <p>INTERCAMBIO DE KAMAS: ¿Quieres intercambiar kamas en diferentes servidores o juegos? Póngase en contacto con soporte en vivo para intercambiar tus kamas</p>
            <p>ATENCIÓN: No confíes en nadie que te pida que devuelvas kamas en el juego. Bloquea si alguien te pide que devuelvas tus kamas.</p>
          </div>
        </div>
      </aside>
      <div className="payment-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="server">Servidor *</label>
          <select id="server" name="server" value={orderDetails.server} onChange={handleInputChange} required>
            {servers.map(server => (
              <option key={server} value={server}>{server}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="characterName">Nombre del personaje *</label>
          <input
            id="characterName"
            type="text"
            name="characterName"
            value={orderDetails.characterName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">Cantidad (millones) *</label>
          <input
            id="amount"
            type="number"
            name="amount"
            value={orderDetails.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="totalCost">Cantidad *</label>
          <input
            id="totalCost"
            type="text"
            name="totalCost"
            value={orderDetails.totalCost}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-button">COMPRAR</button>
      </form>
    </div>
    </div>
  );
}

export default PaymentForm;
