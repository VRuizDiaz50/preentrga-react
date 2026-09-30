
import React, { useState } from 'react';

const Carrito = () => {
  // Estado con un producto de muestra para preentrega
  const [itemsCarrito, setItemsCarrito] = useState([
    {
      id: '1',
      nombre: 'Teclado Mecánico RGB',
      precio: 45000,
      cantidad: 1,
      imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80'
    }
  ]);

  const incrementarCantidad = (id) => {
    setItemsCarrito(itemsCarrito.map(item => 
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const decrementarCantidad = (id) => {
    setItemsCarrito(itemsCarrito.map(item => {
      if (item.id === id && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    }));
  };

  const eliminarProducto = (id) => {
    setItemsCarrito(itemsCarrito.filter(item => item.id !== id));
  };

  const calcularTotal = () => {
    return itemsCarrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h2>Carrito de Compras</h2>

      {itemsCarrito.length === 0 ? (
        <div style={{ padding: '20px 0' }}>
          <p>Tu carrito está vacío actualmente.</p>
        </div>
      ) : (
        <div>
          {itemsCarrito.map(item => (
            <div 
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                marginBottom: '12px',
                backgroundColor: '#fff'
              }}
            >
              <img 
                src={item.imagen} 
                alt={item.nombre} 
                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} 
              />
              
              <div style={{ flex: 1, marginLeft: '16px' }}>
                <h4 style={{ margin: '0 0 4px 0' }}>{item.nombre}</h4>
                <p style={{ margin: 0, color: '#666' }}>${item.precio} c/u</p>
              </div>

              {/* Botones de incremento/decremento */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button 
                  onClick={() => decrementarCantidad(item.id)}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f5f5f5',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  -
                </button>
                <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                  {item.cantidad}
                </span>
                <button 
                  onClick={() => incrementarCantidad(item.id)}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f5f5f5',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  +
                </button>
              </div>

              <div style={{ textAlign: 'right', minWidth: '100px', marginLeft: '16px' }}>
                <p style={{ fontWeight: 'bold', margin: '0 0 4px 0' }}>
                  ${item.precio * item.cantidad}
                </p>
                <button 
                  onClick={() => eliminarProducto(item.id)}
                  style={{ background: 'none', border: 'none', color: '#d9534f', cursor: 'pointer', fontSize: '0.85rem' }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '20px', borderTop: '2px solid #eee', paddingTop: '16px', textAlign: 'right' }}>
            <h3>Total: ${calcularTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;