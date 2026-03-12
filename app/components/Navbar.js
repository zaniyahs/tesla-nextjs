'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'background 0.3s ease',
    }}>
      <div>
        <Image
          src="/tesla-logo.png"
          alt="Tesla"
          width={120}
          height={30}
          style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
        />
      </div>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '32px',
        margin: 0,
        padding: 0,
      }}>
        <li><a href="#model3" style={linkStyle}>Model 3</a></li>
        <li><a href="#modely" style={linkStyle}>Model Y</a></li>
        <li><a href="#modelx" style={linkStyle}>Model X</a></li>
        <li><a href="#models" style={linkStyle}>Model S</a></li>
        <li><a href="#solar" style={linkStyle}>Solar</a></li>
      </ul>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a href="#account" style={linkStyle}>Account</a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: 'white', fontSize: '22px', cursor: 'pointer' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: '500',
  letterSpacing: '0.5px',
};
