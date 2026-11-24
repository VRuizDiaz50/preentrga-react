
const IconPin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e1304dd4" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877f2" aria-hidden="true">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2" aria-hidden="true">
    <path d="M6.94 8.5H3.56V19.5h3.38V8.5zM5.25 3.5a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94zM20.44 13.02c0-2.8-1.5-4.1-3.5-4.1-1.61 0-2.34.89-2.74 1.51V8.5h-3.38c.04.97 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.9.27-.66.87-1.35 1.89-1.35 1.33 0 1.87 1.02 1.87 2.51V19.5h3.38v-6.48z" />
  </svg>
);

const rowStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.45rem',
};

const linkStyle = {
  color: '#0f172a',
  textDecoration: 'none',
  fontWeight: '500',
};

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.72)',
  padding: '0.28rem 0.6rem',
  borderRadius: '8px',
  flex: '1 1 200px',
  fontSize: '0.82rem',
};

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#f8b4a0',
        color: '#0f172a',
        padding: '0.7rem 1.75rem',
        borderTop: '1px solid rgba(15, 23, 42, 0.12)',
        marginTop: '1.25rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* 3 columnas superiores */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          <div>
            <h4 style={{ margin: '0 0 0.3rem', fontSize: '0.96rem', fontWeight: '700' }}>
              Tech Store S.A.
            </h4>
            <p style={{ margin: '0 0 0.25rem', fontSize: '0.82rem', lineHeight: '1.35', color: '#1e293b' }}>
              Tu tienda de confianza en tecnología, componentes y periféricos.
            </p>
            <p style={{ margin: 0, fontSize: '0.76rem', color: '#334155' }}>
              © 2026 Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h4 style={{ margin: '0 0 0.3rem', fontSize: '0.96rem', fontWeight: '700' }}>
              Contacto y Ubicación
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.24rem', fontSize: '0.82rem' }}>
              <li style={rowStyle}><IconPin /><span>Av. Corrientes 1234, CABA</span></li>
              <li style={rowStyle}><IconPhone /><span>Tel: (011) 4321-5678</span></li>
              <li style={rowStyle}><IconPhone /><span>WhatsApp: +54 9 11 9876-5432</span></li>
              <li style={rowStyle}><IconMail /><span>contacto@techstore.com</span></li>
              <li>
                <a
                  href="https://maps.google.com/?q=Av.+Corrientes+1234,+CABA"
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...linkStyle, textDecoration: 'underline', fontSize: '0.8rem' }}
                >
                  Ver en Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 0.3rem', fontSize: '0.96rem', fontWeight: '700' }}>
              Redes Sociales
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.32rem', fontSize: '0.84rem' }}>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ ...rowStyle, ...linkStyle }}>
                  <IconInstagram />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ ...rowStyle, ...linkStyle }}>
                  <IconFacebook />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{ ...rowStyle, ...linkStyle }}>
                  <IconLinkedIn />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fila inferior: Nuestro Equipo */}
        <div style={{ marginTop: '0.65rem', paddingTop: '0.45rem', borderTop: '1px solid rgba(15, 23, 42, 0.12)' }}>
          <h4 style={{ margin: '0 0 0.35rem', fontSize: '0.9rem', fontWeight: '700' }}>
            Nuestro Equipo
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <div style={cardStyle}>
              <strong>Ana García</strong> · <span style={{ color: '#334155' }}>Encargada Técnica en Programación</span>
            </div>
            <div style={cardStyle}>
              <strong>Carlos Gómez</strong> · <span style={{ color: '#334155' }}>Personal de Ventas</span>
            </div>
            <div style={cardStyle}>
              <strong>Lucía Fernández</strong> · <span style={{ color: '#334155' }}>Soporte y Asesoría Técnica</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;