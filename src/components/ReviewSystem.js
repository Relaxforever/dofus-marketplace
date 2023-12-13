import React, { useState } from 'react';
import './ReviewSystem.css'; // Asegúrate de crear este archivo CSS para estilizar

function ReviewSystem({ productId }) {
  const [review, setReview] = useState({
    rating: 0,
    comment: ''
  });

  const handleRatingChange = (e) => {
    // Lógica para manejar el cambio de valoración
  };

  const handleCommentChange = (e) => {
    setReview({ ...review, comment: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la reseña
  };

  return (
    <div className="review-system">
      <h2>Escribe una Reseña</h2>
      <form onSubmit={handleSubmit}>
        {/* Componentes para calificación con estrellas y campo de texto para el comentario */}
        <button type="submit" className="submit-review">Enviar Reseña</button>
      </form>
    </div>
  );
}

export default ReviewSystem;
