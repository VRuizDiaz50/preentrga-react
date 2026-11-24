
import React, { useEffect, useState } from 'react';
import {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} from '../services/productoService';

const estadoInicial = {
  nombre: '',
  precio: '',
  stock: '',
  categoria: '',
  imagen: '',
  descripcion: ''
};

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [formData, setFormData] = useState(estadoInicial);
  const [editandoId, setEditandoId] = useState(null);
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [guardando, setGuardando] = useState(false);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      const data = await obtenerProductos();
      setProductos(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || 'No se pudieron cargar los productos.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const limpiarFormulario = () => {
    setFormData(estadoInicial);
    setEditandoId(null);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    const nombreLimpio = formData.nombre.trim();
    const precioNum = Number(formData.precio);
    const stockNum = Number(formData.stock);

    if (!nombreLimpio) {
      setError('Ingresá el nombre del producto.');
      return;
    }

    if (Number.isNaN(precioNum) || precioNum <= 0) {
      setError('El precio debe ser mayor a 0.');
      return;
    }

    if (Number.isNaN(stockNum) || stockNum < 0 || !Number.isInteger(stockNum)) {
      setError('El stock debe ser un número entero mayor o igual a 0.');
      return;
    }

    const payload = {
      nombre: nombreLimpio,
      precio: precioNum,
      stock: stockNum,
      categoria: formData.categoria.trim(),
      imagen: formData.imagen.trim(),
      descripcion: formData.descripcion.trim()
    };

    try {
      setGuardando(true);
      if (editandoId) {
        await actualizarProducto(editandoId, payload);
        setMensaje('Producto actualizado correctamente.');
      } else {
        await crearProducto(payload);
        setMensaje('Producto creado correctamente.');
      }
      limpiarFormulario();
      await cargarProductos();
    } catch (err) {
      setError(err?.message || 'Ocurrió un error al guardar el producto.');
    } finally {
      setGuardando(false);
    }
  };

  const handleEditar = (producto) => {
    setError('');
    setMensaje('');
    setEditandoId(producto.id);
    setFormData({
      nombre: producto.nombre || '',
      precio: producto.precio ?? '',
      stock: producto.stock ?? '',
      categoria: producto.categoria || '',
      imagen: producto.imagen || '',
      descripcion: producto.descripcion || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEliminar = async (producto) => {
    const confirmado = window.confirm(
      `¿Seguro que querés eliminar "${producto.nombre}"? Esta acción no se puede deshacer.`
    );
    if (!confirmado) return;

    try {
      setError('');
      setMensaje('');
      await eliminarProducto(producto.id);
      if (editandoId === producto.id) {
        limpiarFormulario();
      }
      setMensaje('Producto eliminado correctamente.');
      await cargarProductos();
    } catch (err) {
      setError(err?.message || 'No se pudo eliminar el producto.');
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '32px auto', padding: '0 16px' }}>
      <h2>Administración de Productos (CRUD)</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gap: '12px',
          padding: '16px',
          border: '1px solid #cbd5e1',
          borderRadius: '8px',
          backgroundColor: '#f8fafc',
          marginBottom: '28px'
        }}
      >
        <h3 style={{ margin: 0 }}>
          {editandoId ? 'Editar producto' : 'Crear nuevo producto'}
        </h3>

        {error && (
          <p style={{ margin: 0, color: '#dc2626', fontWeight: 'bold' }}>{error}</p>
        )}
        {mensaje && (
          <p style={{ margin: 0, color: '#16a34a', fontWeight: 'bold' }}>{mensaje}</p>
        )}

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Nombre *</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. Freidora de Aire"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '4px' }}>Precio (mayor a 0) *</label>
            <input
              type="number"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              min="1"
              step="any"
              placeholder="Ej. 280000"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '4px' }}>Stock (0 o mayor) *</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
              step="1"
              placeholder="Ej. 5"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Categoría</label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Ej. Belleza, Hogar, Tecnología"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>URL de imagen</label>
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            placeholder="https://..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows="2"
            placeholder="Descripción breve"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            type="submit"
            disabled={guardando}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007a3d',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {guardando
              ? 'Guardando...'
              : editandoId
                ? 'Guardar cambios'
                : 'Crear producto'}
          </button>

          {editandoId && (
            <button
              type="button"
              onClick={limpiarFormulario}
              style={{
                padding: '8px 14px',
                backgroundColor: '#e2e8f0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cancelar edición
            </button>
          )}
        </div>
      </form>

      <h3>Productos cargados</h3>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : productos.length === 0 ? (
        <p>No hay productos cargados todavía.</p>
      ) : (
        <div style={{ display: 'grid', gap: '10px' }}>
          {productos.map((prod) => (
            <div
              key={prod.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <strong>{prod.nombre}</strong> — ${Number(prod.precio)} | Stock: {prod.stock ?? 0}
                {prod.categoria ? ` | Categoría: ${prod.categoria}` : ''}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleEditar(prod)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#0284c7',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => handleEliminar(prod)}
                  style={{
                    padding: '6px 12px',
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
        </div>
      )}
    </div>
  );
};

export default AdminProductos;