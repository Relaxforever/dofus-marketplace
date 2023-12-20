import React, { useState } from 'react';
import './FAQSection.css'; // Make sure to create this CSS file

const questionsAnswers = [
  {
    question: '¿CÓMO RECIBIR TUS KAMAS EN DOFUS / DOFUS TOUCH / DOFUS RETRO?',
    answer:
      'Después de realizar el pedido, nuestro agente se comunicará contigo en el juego y te proporcionará el punto de encuentro (coordenadas del mapa del juego) para entregar tus Kamas. Asegúrate de poder recibir mensajes privados dentro del juego y luego ve a los datos de contacto proporcionados. El 95% de los pedidos se entregan en 5 minutos. No te fíes de nadie que te pida que devuelvas kamas en el juego, bloquéalo si alguien te pide que devuelvas tus kamas.'
    // Add the rest of the questions and answers here.
  },
  {
    question: '¿CÓMO COMPRAR KAMAS EN DOFUS / DOFUS TOUCH / DOFUS RETRO?',
    answer:
      '1. Elige tu servidor y cantidad de Kamas. 2. Proporciona tu nombre de personaje y datos de contacto. 3. Elige tu método de pago. 4. Realiza el pago. 5. Recibe tus Kamas.'
  },
  {
    question: '¿ES SEGURO COMPRAR KAMAS EN DOFUS / DOFUS TOUCH / DOFUS RETRO?',
    answer:
      'Sí, es seguro comprar Kamas en IGVault. Todos los Kamas DOFUS / DOFUS TOUCH / DOFUS RETRO ofrecidos en IGVault son producidos por jugadores profesionales y entregados en el juego por nuestros agentes. No hay bots ni trampas. Además, IGVault tiene un sistema de clasificación de vendedores que permite a los compradores ver las calificaciones de los vendedores.'
  },
  {
    question: '¿CÓMO VENDER KAMAS EN DOFUS / DOFUS TOUCH / DOFUS RETRO?',
    answer:
      '1. Regístrate en IGVault y publica tu oferta. 2. Cuando alguien compre tu oferta, recibirás un mensaje en el juego. 3. Entrega tus Kamas en el juego. 4. Recibe el pago.'
  },
  {
    question: '¿ES SEGURO VENDER KAMAS EN DOFUS / DOFUS TOUCH / DOFUS RETRO?',
    answer:
      'Sí, es seguro vender Kamas en IGVault. Todos los Kamas DOFUS / DOFUS TOUCH / DOFUS RETRO ofrecidos en IGVault son producidos por jugadores profesionales y entregados en el juego por nuestros agentes. No hay bots ni trampas. Además, IGVault tiene un sistema de clasificación de vendedores que permite a los compradores ver las calificaciones de los vendedores.'
  },
  {
    question: '¿CÓMO COMPRAR KAMAS EN DOFUS / DOFUS TOUCH / DOFUS RETRO?',
    answer:
      '1. Elige tu servidor y cantidad de Kamas. 2. Proporciona tu nombre de personaje y datos de contacto. 3. Elige tu método de pago. 4. Realiza el pago. 5. Recibe tus Kamas.'
  }
  // ... other Q&A objects
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {questionsAnswers.map((qa, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggle(index)}>
            {qa.question}
          </button>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            {qa.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
