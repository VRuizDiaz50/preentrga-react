
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerProductos } from '../services/productoService';
import productosLocales from '../data/productos.json';
import { useCarrito } from '../context/CarritoContext';

const DetalleProductos = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCarrito();

  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [agregadoOk, setAgregadoOk] = useState('');

  useEffect(() => {
    const cargarDetalle = async () => {
      try {
        setCargando(true);
        setError('');
        setAgregadoOk('');
        setCantidad(1);

        const productosFirestore = await obtenerProductos();
        let encontrado = productosFirestore.find((item) => String(item.id) === String(id));

        if (!encontrado) {
          encontrado = productosLocales.find((item) => String(item.id) === String(id));
        }

        if (encontrado) {
          const respaldoLocal = productosLocales.find(
            (p) => p.nombre?.toLowerCase().trim() === encontrado.nombre?.toLowerCase().trim()
          );
          if (respaldoLocal) {
            encontrado = {
              ...respaldoLocal,
              ...encontrado,
              imagen: encontrado.imagen || respaldoLocal.imagen,
              descripcion: encontrado.descripcion || respaldoLocal.descripcion,
              categoria: encontrado.categoria || respaldoLocal.categoria,
            };
          }
        }

        setProducto(encontrado || null);
      } catch (err) {
        console.error(err);
        setError('Error al cargar el detalle del producto.');
      } finally {
        setCargando(false);
      }
    };

    cargarDetalle();
  }, [id]);

  const handleAgregar = () => {
    if (!producto) return;
    const stockDisp = Math.max(0, Number(producto.stock ?? 0));
    const cantValida = Math.max(1, Math.min(Number(cantidad) || 1, stockDisp || 1));

    agregarAlCarrito(
      {
        id: producto.id,
        nombre: producto.nombre,
        precio: Number(producto.precio),
        imagen: producto.imagen,
        stock: stockDisp,
      },
      cantValida
    );

    setAgregadoOk(`¡Se agregó "${producto.nombre}" (${cantValida}) al carrito!`);
  };

  if (cargando) {
    return <p style={{ textAlign: 'center', padding: '3rem' }}>Cargando detalle del producto...</p>;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <p>{error}</p>
        <Link to="/productos" style={{ color: '#2563eb' }}>Volver al catálogo</Link>
      </div>
    );
  }

  if (!producto) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Producto no encontrado</h2>
        <Link to="/productos" style={{ color: '#2563eb' }}>Volver al catálogo</Link>
      </div>
    );
  }

  const stockDisponible = Math.max(0, Number(producto.stock ?? 0));

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#1e293b', marginTop: 0 }}>{producto.nombre}</h2>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>{producto.descripcion}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>${producto.precio}</p>
        <p style={{ color: '#16a34a', fontWeight: 'bold' }}>Categoría: {producto.categoria}</p>
        <p style={{ fontWeight: 'bold' }}>Stock disponible: {stockDisponible}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <label htmlFor="cantidad-prod">Cantidad:</label>
          <input
            id="cantidad-prod"
            type="number"
            min="1"
            max={stockDisponible > 0 ? stockDisponible : undefined}
            value={cantidad}
            onChange={(e) => setCantidad(Math.max(1, Number(e.target.value) || 1))}
            style={{ width: '70px', padding: '0.4rem' }}
          />
          <button
            type="button"
            onClick={handleAgregar}
            disabled={stockDisponible === 0}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: stockDisponible === 0 ? '#94a3b8' : '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: stockDisponible === 0 ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
            }}
          >
            {stockDisponible === 0 ? 'Sin stock' : 'Agregar al carrito'}
          </button>
        </div>

        {agregadoOk && (
          <p style={{ color: '#16a34a', fontWeight: 'bold', marginTop: '0.75rem' }}>{agregadoOk}</p>
        )}

        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1.5rem' }}>
          <Link to="/productos" style={{ color: '#2563eb' }}>Volver al catálogo</Link>
          <Link to="/carrito" style={{ color: '#16a34a', fontWeight: 'bold' }}>Ir al carrito</Link>
        </div>
      </div>
    </div>
  );
};

export default DetalleProductos;