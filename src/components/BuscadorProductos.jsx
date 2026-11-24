
import React from 'react';

const BuscadorProductos = ({ busqueda, onBusquedaChange, onLimpiar }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        margin: '16px 0',
        flexWrap: 'wrap'
      }}
    >
      <input
        type="text"
        value={busqueda}
        onChange={(e) => onBusquedaChange(e.target.value)}
        placeholder="Buscar productos "
        aria-label="Buscar productos"
        style={{
          flex: '1 1 260px',
          padding: '8px 12px',
          border: '1px solid #cbd5e1',
          borderRadius: '6px'
        }}
      />

      {busqueda && (
        <button
          type="button"
          onClick={onLimpiar}
          style={{
            padding: '8px 14px',
            backgroundColor: '#e2e8f0',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Limpiar
        </button>
      )}
    </div>
  );
};

export default BuscadorProductos;