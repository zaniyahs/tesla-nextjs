'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#000', padding: '24px 40px', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        <a style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Tesla 2024</a>
        <a style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Privacy</a>
        <a style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Contact</a>
        <a style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Careers</a>
        <a style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>News</a>
        <a style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Locations</a>
      </div>
    </footer>
  );
}
