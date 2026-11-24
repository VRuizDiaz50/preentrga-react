
import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/config';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

const DIAS_SEMANA = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado'
];

export const CarritoProvider = ({ children }) => {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [promociones, setPromociones] = useState([]);
  const [esPrimeraCompra, setEsPrimeraCompra] = useState(false);
  const [pagaConTarjeta, setPagaConTarjeta] = useState(false);

  useEffect(() => {
    const cargarPromociones = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'promociones'));
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPromociones(lista.filter((promo) => promo.activa === true));
      } catch (error) {
        console.error('Error al cargar promociones desde Firestore:', error);
      }
    };

    cargarPromociones();
  }, []);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    setItemsCarrito((prevItems) => {
      const existe = prevItems.find((item) => item.id === producto.id);
      if (existe) {
        return prevItems.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...prevItems, { ...producto, cantidad }];
    });
  };

  const incrementarCantidad = (id) => {
    setItemsCarrito((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decrementarCantidad = (id) => {
    setItemsCarrito((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const eliminarProducto = (id) => {
    setItemsCarrito((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setItemsCarrito([]);
  };

  const calcularSubtotal = () => {
    return itemsCarrito.reduce(
      (acc, item) => acc + Number(item.precio) * Number(item.cantidad),
      0
    );
  };

  const obtenerPromocionesAplicadas = () => {
    const hoy = DIAS_SEMANA[new Date().getDay()];

    return promociones.filter((promo) => {
      if (promo.dia) {
        return String(promo.dia).toLowerCase().trim() === hoy;
      }
      if (promo.tipo === 'primera-compra') {
        return esPrimeraCompra;
      }
      if (promo.tipo === 'tarjeta-credito') {
        return pagaConTarjeta;
      }
      return false;
    });
  };

  const calcularDescuento = () => {
    const subtotal = calcularSubtotal();
    const aplicadas = obtenerPromocionesAplicadas();
    const porcentajeTotal = Math.min(
      100,
      aplicadas.reduce((acc, promo) => acc + (Number(promo.descuento) || 0), 0)
    );
    return Math.round((subtotal * porcentajeTotal) / 100);
  };

  const calcularTotal = () => {
    const subtotal = calcularSubtotal();
    const descuento = calcularDescuento();
    return Math.max(0, subtotal - descuento);
  };

  const cantidadTotal = () => {
    return itemsCarrito.reduce((acc, item) => acc + Number(item.cantidad), 0);
  };

  return (
    <CarritoContext.Provider
      value={{
        itemsCarrito,
        agregarAlCarrito,
        incrementarCantidad,
        decrementarCantidad,
        eliminarProducto,
        vaciarCarrito,
        calcularSubtotal,
        calcularDescuento,
        calcularTotal,
        cantidadTotal,
        promociones,
        obtenerPromocionesAplicadas,
        esPrimeraCompra,
        setEsPrimeraCompra,
        pagaConTarjeta,
        setPagaConTarjeta
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};