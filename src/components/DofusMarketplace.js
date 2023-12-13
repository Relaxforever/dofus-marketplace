import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DofusMarketplace.css'; // Asegúrate de crear este archivo CSS para estilizar

function DofusMarketplace() {
    const { gameType } = useParams();
    const [servers, setServers] = useState([]); // Ahora será un array de objetos
    const [selectedServer, setSelectedServer] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [kamasAmount, setKamasAmount] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

  // Suponemos que la API devuelve una lista de servidores y un precio por millón de kamas
  useEffect(() => {
    // Imaginemos que esto es la respuesta de la API
    const serverData = [
      { id: 1, name: 'Servidor1', pricePerMillion: 1.01 },
      { id: 2, name: 'Servidor2', pricePerMillion: 1.02 },
      { id: 3, name: 'Servidor3', pricePerMillion: 1.03 }
    ];
    setServers(serverData);
    // Establecer un servidor por defecto si es necesario
    setSelectedServer(serverData[0].name);
  }, [gameType]);

  // Función para calcular el precio total
  const calculateTotalPrice = (amount, serverName) => {
    const server = servers.find(s => s.name === serverName);
    const pricePerMillion = server ? server.pricePerMillion : 0;
    return (amount * pricePerMillion).toFixed(2); // Asegura dos decimales
  };

  const handleServerChange = (e) => {
    const newSelectedServer = e.target.value;
    setSelectedServer(newSelectedServer);
    setTotalPrice(calculateTotalPrice(kamasAmount, newSelectedServer));
  };

  const handleKamasAmountChange = (e) => {
    const amount = e.target.value;
    setKamasAmount(amount);
    setTotalPrice(calculateTotalPrice(amount, selectedServer));
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    // Lógica para procesar la compra
  };

  return (
    <div className="marketplace-container">
      <div className="marketplace-form-container">
        <form onSubmit={handlePurchase}>
          <label htmlFor="server">Servidor</label>
          <select id="server" value={selectedServer} onChange={handleServerChange}>
            {servers.map((server) => (
              <option key={server.id} value={server.name}>{server.name}</option>
            ))}
          </select>

          <label htmlFor="characterName">Nombre del personaje</label>
          <input
            id="characterName"
            type="text"
            value={characterName}
            onChange={handleCharacterNameChange}
            required
          />

          <label htmlFor="kamasAmount">Cantidad (millones)</label>
          <input
            id="kamasAmount"
            type="number"
            value={kamasAmount}
            onChange={handleKamasAmountChange}
            required
          />

          <div className="total-price">
            Precio Total: {totalPrice}€
          </div>

          <button type="submit">COMPRAR</button>
        </form>
      </div>
      <div className="marketplace-info">
        {/* Información adicional como iconos y descripciones */}
      </div>
    </div>
  );
}

export default DofusMarketplace;
