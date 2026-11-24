
# E-Commerce React — Entrega Final (2026-2C)

Aplicación web de e-commerce desarrollada con **React** y **Vite**, conectada a **Firebase** (Authentication y Firestore) para la gestión de usuarios y catálogo de productos.

## Funcionalidades implementadas

- **Carrito de compras (`CarritoContext`):** Gestión del estado global del carrito mediante Context API, con opciones para agregar productos, incrementar o decrementar cantidades, eliminar ítems y vaciar el carrito.
- **Autenticación y rutas protegidas (`AuthContext`):** Inicio de sesión y registro con Firebase Authentication, y protección de rutas de administración para restringir el acceso al panel de gestión.
- **CRUD de productos con Firebase:** Creación, lectura, edición y eliminación de productos (con confirmación previa antes de borrar), incluyendo manejo de estados de carga y mensajes de error.
- **Búsqueda y filtrado por categorías:** Búsqueda en tiempo real conectada mediante parámetros de URL (`?buscar=...`) y navegación por categorías (*Cuidado personal*, *Entretenimiento*, *Línea blanca* e *Informática*).
- **Diseño y navegación:** Interfaz responsiva con encabezado, sub-barra de categorías y vistas organizadas para catálogo, detalle, carrito y administración.

## Acceso al panel de administración

Para probar el acceso y la gestión del panel de administración:

- **Correo:** `admin@gmail.com`
- **Contraseña:** `admin123`

## Tecnologías utilizadas

- **React** + **Vite**
- **React Router**
- **Firebase Authentication** y **Cloud Firestore**
- **Context API**
- **JavaScript** y **CSS**

## Instalación y ejecución local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```