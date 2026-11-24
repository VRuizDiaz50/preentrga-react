
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner con fondo claro y sutil */}
      <section 
        style={{
    
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.45)), url("/electrodomesticos-banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          color: '#ffffff',
          padding: '50px 20px',
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box'
  
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#ffffff' }}>
          
          ¡Bienvenidos a Tech Store!
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '25px', color: '#ffffff' }}>
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