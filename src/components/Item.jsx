
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  const [meGusta, setMeGusta] = useState(false);

  const toggleMeGusta = () => {
    setMeGusta(!meGusta);
  };

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      position: 'relative'
    }}>
      
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }}
      />
      <h3 style={{ fontSize: '1.1rem', margin: '12px 0 8px 0', color: '#111' }}>{producto.nombre}</h3>
      <p style={{ fontWeight: 'bold', color: '#0066cc', fontSize: '1.2rem', marginBottom: '12px' }}>
        ${producto.precio}
      </p>
      
      <Link 
        to={`/producto/${producto.id}`}
        style={{
          display: 'inline-block',
          backgroundColor: '#007a3d',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}
      >
        Ver Detalle
        {/* Botón de Corazón (Me Gusta) */}
        </Link>
      <button 
        onClick={toggleMeGusta}
        title={meGusta ? "Quitar de me gusta" : "Agregar a me gusta"}
        style={{
          marginLeft: '10px',
          verticalAlign: 'middle', 
          background: 'transparent',
          border: 'none',
          fontSize: '1.4rem',
          cursor: 'pointer',
          color: meGusta ? '#e63946' : '#ccc',
          transition: 'color 0.2s ease, transform 0.1s ease'
        }}
      >
        {meGusta ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default Item;