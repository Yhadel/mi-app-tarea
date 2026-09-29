import React from 'react';

export default function Experiencia() {
  // Reemplaza esta URL con el enlace de tu reunión o grabación de Teams
  const linkTeams = "https://itlaedudo-my.sharepoint.com/:v:/g/personal/20242493_itla_edu_do/IQAPrxcppti_RoNxXe_2kO-eAdaMj2apjcCnOK9mNeNH9-U?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=DKjZRv";

  return (
    <div style={{ padding: '40px', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ color: '#38bdf8', marginBottom: '15px' }}>Experiencia Personal</h2>
      <p style={{ color: '#cbd5e1', marginBottom: '25px' }}>
        Explicación del proceso de desarrollo del proyecto en React.
      </p>

      <div style={{ 
        background: '#1e293b', 
        border: '1px solid #334155', 
        borderRadius: '12px', 
        padding: '30px', 
        maxWidth: '500px', 
        margin: '0 auto', 
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)' 
      }}>
        <h3 style={{ color: '#f8fafc', marginBottom: '15px' }}>Grabación de la Exposición</h3>
        <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px' }}>
          Haz clic en el siguiente botón para ver la grabación alojada en Microsoft Teams:
        </p>
        
        <a 
          href={linkTeams} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'inline-block', 
            padding: '12px 24px', 
            background: '#0284c7', 
            color: '#fff', 
            borderRadius: '6px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            transition: 'background 0.2s'
          }}
        >
          ▶ Ver Video en Teams
        </a>
      </div>
    </div>
  );
}