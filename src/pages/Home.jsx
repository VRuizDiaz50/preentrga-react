
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner con fondo claro y sutil */}
      <section 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#222222',
          padding: '80px 20px',
          textAlign: 'center',
          borderRadius: '8px',
          margin: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#111111' }}>
          ¡Bienvenidos a Tech Store!
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '25px', color: '#555555' }}>
          Encuentra los mejores periféricos y componentes al mejor precio.
        </p>
        <Link 
          to="/productos" 
          style={{
            backgroundColor: '#0066cc',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}
        >
          Ver Catálogo de Productos
        </Link>
      </section>
    </div>
  );
};

export default Home;