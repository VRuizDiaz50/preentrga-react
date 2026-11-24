
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [termino, setTermino] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const limpio = termino.trim();
    if (limpio) {
      navigate(`/productos?buscar=${encodeURIComponent(limpio)}`);
    } else {
      navigate('/productos');
    }
  };

  return (
    <header style={{ borderBottom: '1px solid #e2e8f0' }}>
      {/* Franja superior en salmón suave */}
      <div
        style={{
          backgroundColor: '#f8b4a0',
          color: '#0f172a',
          padding: '0.7rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <Link
          to="/"
          style={{
            margin: 0,
            fontSize: '1.35rem',
            color: '#0f172a',
            fontWeight: '700',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Tech Store
        </Link>

        <form
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 280px',
            maxWidth: '500px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '999px',
            border: '1px solid rgba(15, 23, 42, 0.14)',
            padding: '0.2rem 0.25rem 0.2rem 0.95rem',
            gap: '0.4rem',
          }}
        >
          <input
            type="search"
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
            placeholder="Buscar"
            aria-label="Buscar productos"
            style={{
              flex: 1,
              border: 'none',
              backgroundColor: 'transparent',
              color: '#0f172a',
              fontSize: '0.92rem',
              outline: 'none',
              padding: '0.3rem 0',
            }}
          />
          <button
            type="submit"
            style={{
              border: 'none',
              borderRadius: '999px',
              backgroundColor: '#0f172a',
              color: '#f8fafc',
              padding: '0.42rem 0.9rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Buscar
          </button>
        </form>
      </div>

      {/* Barra de navegación limpia */}
     {/* Barra de navegación limpia */}
      <nav
        style={{
          backgroundColor: '#1e293b',
          padding: '0.6rem 2rem',
          display: 'flex',
          gap: '1.75rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/" style={{ color: '#f1f5f9', textDecoration: 'none', fontSize: '0.95rem' }}>
          Inicio
        </Link>
        <Link to="/productos" style={{ color: '#f1f5f9', textDecoration: 'none', fontSize: '0.95rem' }}>
          Productos
        </Link>
        <Link
          to="/carrito"
          style={{
            color: '#f1f5f9',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <span>Carrito</span>
          <span aria-hidden="true">🛒</span>
        </Link>
        <Link
          to="/admin"
          style={{
            marginLeft: 'auto',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '600',
          }}
        >
          Admin / Agregar producto
        </Link>
      </nav>
      <div
  style={{
    marginTop: '6px',
    padding: '6px 16px',
    fontSize: '0.78rem',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  }}
>
  <span style={{ color: '#475569' }}>Categorías:</span>
  <Link to="/productos?buscar=cuidado%20personal" style={{ color: '#1e293b', textDecoration: 'none' }}>
    Cuidado personal
  </Link>
  <Link to="/productos?buscar=entretenimiento" style={{ color: '#1e293b', textDecoration: 'none' }}>
    Entretenimiento
  </Link>
  <Link to="/productos?buscar=linea%20blanca" style={{ color: '#1e293b', textDecoration: 'none' }}>
    Línea blanca
  </Link>
  <Link to="/productos?buscar=Informática" style={{ color: '#1e293b', textDecoration: 'none' }}>
  Informática
  </Link>
  </div>

    </header>
  );
};

export default Header;