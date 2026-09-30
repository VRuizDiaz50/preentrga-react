import { useState, useEffect } from 'react';
import Item from './Item';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simulamos la consulta a una API consumiendo el archivo local productos.json
    fetch('/src/data/productos.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => console.error('Error cargando productos:', error));
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center' }}>Cargando catálogo de productos...</p>;
  }

  return (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

export default ItemListContainer;