
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#1e293b',
      padding: '1rem 2rem',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#60a5fa' }}>Tech Store</h1>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
        <Link to="/productos" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 'bold' }}>Productos</Link>
        <Link to="/carrito" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 'bold' }}>Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;