
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { db } from '../Firebase/config';

const COLECCION_PRODUCTOS = 'productos';

// Asegura que el stock nunca sea negativo (mínimo 0)
const normalizarStock = (stock) => {
  const numero = Number(stock);
  if (Number.isNaN(numero) || numero < 0) {
    return 0;
  }
  return Math.floor(numero);
};

// Leer productos desde Firestore
export const obtenerProductos = async () => {
  const refColeccion = collection(db, COLECCION_PRODUCTOS);
  const snapshot = await getDocs(refColeccion);
  return snapshot.docs.map((documento) => ({
    id: documento.id,
    ...documento.data(),
    stock: normalizarStock(documento.data().stock)
  }));
};

// Crear producto validando nombre, precio > 0 y stock >= 0
export const crearProducto = async (producto) => {
  const nombreLimpio = (producto.nombre || '').trim();
  const precioNum = Number(producto.precio);
  const stockNum = normalizarStock(producto.stock);

  if (!nombreLimpio) {
    throw new Error('El nombre del producto es obligatorio.');
  }
  if (Number.isNaN(precioNum) || precioNum <= 0) {
    throw new Error('El precio debe ser mayor que cero.');
  }

  const refColeccion = collection(db, COLECCION_PRODUCTOS);
  const docRef = await addDoc(refColeccion, {
    ...producto,
    nombre: nombreLimpio,
    precio: precioNum,
    stock: stockNum
  });

  return docRef.id;
};

// Actualizar producto garantizando que el stock nunca baje de 0
export const actualizarProducto = async (id, datosActualizados) => {
  const datosLimpios = { ...datosActualizados };

  if (datosLimpios.nombre !== undefined) {
    const nombreLimpio = String(datosLimpios.nombre).trim();
    if (!nombreLimpio) {
      throw new Error('El nombre del producto es obligatorio.');
    }
    datosLimpios.nombre = nombreLimpio;
  }

  if (datosLimpios.precio !== undefined) {
    const precioNum = Number(datosLimpios.precio);
    if (Number.isNaN(precioNum) || precioNum <= 0) {
      throw new Error('El precio debe ser mayor que cero.');
    }
    datosLimpios.precio = precioNum;
  }

  if (datosLimpios.stock !== undefined) {
    datosLimpios.stock = normalizarStock(datosLimpios.stock);
  }

  const docRef = doc(db, COLECCION_PRODUCTOS, id);
  await updateDoc(docRef, datosLimpios);
};

// Eliminar producto por id
export const eliminarProducto = async (id) => {
  const docRef = doc(db, COLECCION_PRODUCTOS, id);
  await deleteDoc(docRef);
};

// Descuenta stock de forma segura: si la cantidad supera el stock actual, deja el stock en 0 (nunca negativo)
export const descontarStockSeguro = async (id, cantidad) => {
  const cantidadNum = Number(cantidad);
  if (Number.isNaN(cantidadNum) || cantidadNum <= 0) {
    throw new Error('La cantidad a descontar debe ser mayor que cero.');
  }

  const refColeccion = collection(db, COLECCION_PRODUCTOS);
  const snapshot = await getDocs(refColeccion);
  const docEncontrado = snapshot.docs.find((d) => d.id === id);

  if (!docEncontrado) {
    throw new Error('Producto no encontrado en Firestore.');
  }

  const stockActual = normalizarStock(docEncontrado.data().stock);
  const nuevoStock = Math.max(0, stockActual - Math.floor(cantidadNum));

  const docRef = doc(db, COLECCION_PRODUCTOS, id);
  await updateDoc(docRef, { stock: nuevoStock });

  return nuevoStock;
};