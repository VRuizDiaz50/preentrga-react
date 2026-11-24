
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RutaProtegida = ({ children }) => {
  const { usuario, cargandoAuth } = useAuth();

  if (cargandoAuth) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        Verificando sesión...
      </div>
    );
  }

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RutaProtegida;