
import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { obtenerProductos } from '../services/productoService';
import { useSearchParams } from 'react-router-dom';
import BuscadorProductos from '../components/BuscadorProductos';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
const busqueda = searchParams.get('buscar') || '';

const normalizarTexto = (texto = '') =>
  texto
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

const productosFiltrados = productos.filter((prod) => {
  const limpia = normalizarTexto(busqueda);
  if (!limpia) return true;

  const sinPrefijo = limpia.replace(/^(productos?\s+(de|del|la|las|el|los)\s+)/, '');
  const terminos = sinPrefijo.split(/\s+/).filter(Boolean);

  const textoProducto = normalizarTexto(
    [prod.nombre, prod.categoria, prod.descripcion].filter(Boolean).join(' ')
  );

  return terminos.every((termino) => textoProducto.includes(termino));
});

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setCargando(true);
        setError('');
        const datos = await obtenerProductos();
        setProductos(datos);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los productos desde Firebase.');
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  
  if (cargando) {
    return <p style={{ textAlign: 'center' }}>Cargando productos...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center' }}>{error}</p>;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Catálogo de productos</h2>
      <ItemListContainer productos={productosFiltrados} />
    </div>
  );
};

export default Productos;