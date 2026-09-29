import React from 'react';

export default function Inicio() {
  return (
    <div style={{ padding: '40px', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: '30px', color: '#f8fafc' }}>Página Inicial</h1>
      
      <div style={{ 
        background: '#1e293b', 
        border: '1px solid #334155', 
        borderRadius: '12px', 
        padding: '30px', 
        width: '320px', 
        textAlign: 'center', 
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)' 
      }}>
        <img 
          src="/perfil.jpg" 
          alt="Foto Perfil Yhadel Lopez" 
          style={{ 
            width: '140px', 
            height: '140px', 
            borderRadius: '8px', 
            objectFit: 'cover', 
            marginBottom: '15px', 
            border: '2px solid #38bdf8' 
          }} 
        />

        <h2 style={{ fontSize: '22px', margin: '10px 0', color: '#38bdf8' }}>Yhadel Lopez</h2>
        <p style={{ margin: '8px 0', color: '#cbd5e1' }}><strong>Matrícula:</strong> 20242493</p>
        <p style={{ margin: '8px 0', color: '#cbd5e1', wordBreak: 'break-all' }}><strong>Correo:</strong> 20242493@itla.edu.do</p>
      </div>
    </div>
  );
}