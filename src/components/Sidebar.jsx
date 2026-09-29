import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside style={{ 
      width: '260px', 
      background: '#1e293b', 
      color: '#f8fafc', 
      height: '100vh', 
      padding: '24px', 
      display: 'flex', 
      flexDirection: 'column', 
      boxSizing: 'border-box', 
      borderRight: '1px solid #334155' 
    }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '24px', textAlign: 'center' }}>
        Menú App
      </h2>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <NavLink to="/" style={({ isActive }) => linkStyle(isActive)}>a. Inicio</NavLink>
        <NavLink to="/sumadora" style={({ isActive }) => linkStyle(isActive)}>b. Sumadora</NavLink>
        <NavLink to="/traductor" style={({ isActive }) => linkStyle(isActive)}>c. Traductor</NavLink>
        <NavLink to="/tabla" style={({ isActive }) => linkStyle(isActive)}>d. Tabla Multiplicar</NavLink>
        <NavLink to="/experiencia" style={({ isActive }) => linkStyle(isActive)}>e. Experiencia</NavLink>
      </nav>
    </aside>
  );
}

const linkStyle = (isActive) => ({
  color: isActive ? '#fff' : '#94a3b8',
  background: isActive ? '#0284c7' : 'transparent',
  padding: '10px 14px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: isActive ? '600' : '400',
  transition: 'all 0.2s ease'
});