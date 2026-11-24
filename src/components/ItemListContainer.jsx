
import Item from './Item';

const ItemListContainer = ({ productos = [], cargando = false, error = '' }) => {
  if (cargando) {
    return <p style={{ textAlign: 'center' }}>Cargando catálogo de productos...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center' }}>{error}</p>;
  }

  if (productos.length === 0) {
    return <p style={{ textAlign: 'center' }}>No hay productos cargados en Firestore todavía.</p>;
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