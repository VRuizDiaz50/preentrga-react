
const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      padding: '2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Columna 1: Info Tienda */}
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ color: '#38bdf8' }}>Tech Store S.A.</h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
            Tu tienda de confianza en tecnología, componentes y periféricos.
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
            © 2026 Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Contacto y Ubicación */}
        <div style={{ flex: '1 1 250px' }}>
          <h4 style={{ color: '#38bdf8' }}>Contacto y Ubicación</h4>
          <p style={{ margin: '0.3rem 0', color: '#e2e8f0', fontSize: '0.9rem' }}>📍 Av. Corrientes 1234, CABA</p>
          <p style={{ margin: '0.3rem 0', color: '#e2e8f0', fontSize: '0.9rem' }}>📞 Teléfono: (011) 4321-5678</p>
          <p style={{ margin: '0.3rem 0', color: '#e2e8f0', fontSize: '0.9rem' }}>📱 Celular / WhatsApp: +54 9 11 9876-5432</p>
          <p style={{ margin: '0.3rem 0', color: '#e2e8f0', fontSize: '0.9rem' }}>✉️ Email: contacto@techstore.com</p>
          <div style={{ marginTop: '0.5rem' }}>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline', fontSize: '0.85rem' }}>
              🗺️ Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ color: '#38bdf8' }}>Redes Sociales</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none' }}>📷 Instagram</a></li>
<li><a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none' }}>📘 Facebook</a></li>
<li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none' }}>💼 LinkedIn</a></li>
            
          </ul>
        </div>

        {/* Columna 4: Nuestro Equipo de Tienda */}
        <div style={{ flex: '1 1 300px' }}>
          <h4 style={{ color: '#38bdf8' }}>Nuestro Equipo</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#1e293b', padding: '0.5rem 0.8rem', borderRadius: '6px' }}>
              <strong style={{ display: 'block', color: '#ffffff' }}>Ana García</strong>
              <small style={{ color: '#94a3b8' }}>Encargada Técnica en Programación</small>
            </div>
            <div style={{ background: '#1e293b', padding: '0.5rem 0.8rem', borderRadius: '6px' }}>
              <strong style={{ display: 'block', color: '#ffffff' }}>Carlos Gómez</strong>
              <small style={{ color: '#94a3b8' }}>Personal de Ventas</small>
            </div>
            <div style={{ background: '#1e293b', padding: '0.5rem 0.8rem', borderRadius: '6px' }}>
              <strong style={{ display: 'block', color: '#ffffff' }}>Lucía Fernández</strong>
              <small style={{ color: '#94a3b8' }}>Soporte y Asesoría Técnica</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;