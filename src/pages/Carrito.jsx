
import React from 'react';
import { useCarrito } from '../context/CarritoContext';

const Carrito = () => {
  const {
    itemsCarrito,
    incrementarCantidad,
    decrementarCantidad,
    eliminarProducto,
    vaciarCarrito,
    calcularSubtotal,
    calcularDescuento,
    calcularTotal,
    promociones,
    obtenerPromocionesAplicadas,
    esPrimeraCompra,
    setEsPrimeraCompra,
    pagaConTarjeta,
    setPagaConTarjeta
  } = useCarrito();

  const promosAplicadas = obtenerPromocionesAplicadas();

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 16px' }}>
      <h2>Carrito de Compras</h2>

      {itemsCarrito.length === 0 ? (
        <div style={{ padding: '20px 0' }}>
          <p>Tu carrito está vacío actualmente.</p>
        </div>
      ) : (
        <div>
          {itemsCarrito.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 0',
                borderBottom: '1px solid #e2e8f0',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {item.imagen && (
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '6px' }}
                  />
                )}
                <div>
                  <h4 style={{ margin: 0 }}>{item.nombre}</h4>
                  <p style={{ margin: '4px 0', color: '#475569' }}>
                    Precio unitario: ${Number(item.precio)}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => decrementarCantidad(item.id)}
                  style={{ padding: '4px 10px', cursor: 'pointer' }}
                >
                  -
                </button>
                <span>{item.cantidad}</span>
                <button
                  type="button"
                  onClick={() => incrementarCantidad(item.id)}
                  style={{ padding: '4px 10px', cursor: 'pointer' }}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => eliminarProducto(item.id)}
                  style={{
                    padding: '4px 10px',
                    marginLeft: '8px',
                    backgroundColor: '#dc2626',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: '24px',
              padding: '16px',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              backgroundColor: '#f8fafc'
            }}
          >
            <h3 style={{ marginTop: 0 }}>Promociones</h3>

            {promociones.length > 0 ? (
              <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                {promociones.map((promo) => (
                  <li key={promo.id}>{promo.titulo}</li>
                ))}
              </ul>
            ) : (
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                No hay promociones cargadas o activas en este momento.
              </p>
            )}

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: '12px 0' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={esPrimeraCompra}
                  onChange={(e) => setEsPrimeraCompra(e.target.checked)}
                />
                Es mi primera compra (15% OFF)
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={pagaConTarjeta}
                  onChange={(e) => setPagaConTarjeta(e.target.checked)}
                />
                Pago con tarjeta de crédito (10% OFF)
              </label>
            </div>

            {promosAplicadas.length > 0 && (
              <p style={{ color: '#16a34a', fontWeight: 'bold', margin: '8px 0' }}>
                Promociones aplicadas: {promosAplicadas.map((p) => p.titulo).join(' + ')}
              </p>
            )}

            <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '12px 0' }} />

            <p style={{ margin: '6px 0' }}>Subtotal: ${calcularSubtotal()}</p>
            <p style={{ margin: '6px 0', color: '#16a34a' }}>Descuento: -${calcularDescuento()}</p>
            <h3 style={{ margin: '10px 0 0 0' }}>Total a pagar: ${calcularTotal()}</h3>

            <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={vaciarCarrito}
                style={{
                  padding: '8px 14px',
                  backgroundColor: '#e2e8f0',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;