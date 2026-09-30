
import { useParams, Link } from 'react-router-dom';
import productos from '../data/productos.json';

const DetalleProductos = () => {
  const { id } = useParams();
  
  // Comparamos String con String para asegurar que encuentre el producto
  const producto = productos.find((item) => String(item.id) === String(id));

  if (!producto) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Producto no encontrado</h2>
        <Link to="/productos" style={{ color: '#2563eb' }}>Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#1e293b', marginTop: 0 }}>{producto.nombre}</h2>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>{producto.descripcion}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>${producto.precio}</p>
        <p style={{ color: '#16a34a', fontWeight: 'bold' }}>Categoría: {producto.categoria}</p>
        
        <button 
          onClick={() => alert(`¡${producto.nombre} agregado al carrito!`)}
          style={{
            backgroundColor: '#16a34a',
            color: 'white',
            border: 'none',
            padding: '0.8rem 1.5rem',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Agregar al Carrito
        </button>
        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/productos" style={{ color: '#64748b', textDecoration: 'none' }}>← Volver al catálogo</Link>
        </div>
      </div>
    </div>
  );
};

export default DetalleProductos;