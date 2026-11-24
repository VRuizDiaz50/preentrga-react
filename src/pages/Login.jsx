
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { usuario, login, registro, logout } = useAuth();
  const navigate = useNavigate();

  const [esRegistro, setEsRegistro] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setEnviando(true);

    const correoLimpio = email.trim();
    const claveLimpia = password.trim();

    try {
      if (esRegistro) {
        await registro(correoLimpio, claveLimpia);
      } else {
        await login(correoLimpio, claveLimpia);
      }
      navigate('/admin');
    } catch (err) {
      if (err?.code === 'auth/invalid-credential' || err?.code === 'auth/wrong-password' || err?.code === 'auth/user-not-found') {
        setError('Correo o contraseña incorrectos para Firebase Authentication.');
      } else if (err?.code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres.');
      } else {
        setError('Revisá el correo y la contraseña (mínimo 6 caracteres).');
      }
    } finally {
      setEnviando(false);
    }
  };

  const manejarLogout = async () => {
    setError('');
    try {
      await logout();
    } catch (err) {
      setError('No se pudo cerrar sesión.');
    }
  };

  if (usuario) {
    return (
      <div style={{ maxWidth: '420px', margin: '40px auto', padding: '24px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fff' }}>
        <h2>Sesión iniciada</h2>
        <p style={{ color: '#555' }}>Usuario activo: <strong>{usuario.email}</strong></p>
        <button
          onClick={manejarLogout}
          style={{
            padding: '10px 16px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#d9534f',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '420px', margin: '40px auto', padding: '24px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>{esRegistro ? 'Crear cuenta' : 'Iniciar sesión'}</h2>

      <form onSubmit={manejarSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@gmail.com"
            required
            style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        {error && (
          <p style={{ color: '#d9534f', margin: 0, fontSize: '0.9rem' }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={enviando}
          style={{
            padding: '10px 16px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#222',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '4px'
          }}
        >
          {enviando ? 'Procesando...' : esRegistro ? 'Registrarse' : 'Ingresar'}
        </button>
      </form>

      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <button
          type="button"
          onClick={() => {
            setEsRegistro(!esRegistro);
            setError('');
          }}
          style={{ background: 'none', border: 'none', color: '#0066cc', cursor: 'pointer', textDecoration: 'underline' }}
        >
          {esRegistro ? '¿Ya tenés cuenta? Iniciá sesión' : '¿No tenés cuenta? Registrate'}
        </button>
      </div>
    </div>
  );
};

export default Login;