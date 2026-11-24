
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import  Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import DetalleProductos from './pages/DetalleProductos';
import AdminProductos from './pages/AdminProductos';
import Carrito from './pages/Carrito';
import RutaProtegida from './components/RutaProtegida';

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="productos" element={<Productos />} />
              <Route path="producto/:id" element={<DetalleProductos />} />
              <Route path="carrito" element={<Carrito />} />
              <Route  path="login" element={<Login />} />
              <Route path="/admin"
                   element={
              <RutaProtegida>
              <AdminProductos />
              </RutaProtegida>
              }
            />
            </Route>
           </Routes>
        </BrowserRouter>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;