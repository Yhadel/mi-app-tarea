import React, { useState } from 'react';

export default function Sumadora() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [res, setRes] = useState(null);

  return (
    <div style={{ padding: '30px' }}>
      <h2>Sumadora de Números</h2>
      <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder="Número 1" />
      <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder="Número 2" style={{ marginLeft: '10px' }} />
      <button onClick={() => setRes((parseFloat(n1) || 0) + (parseFloat(n2) || 0))} style={{ marginLeft: '10px' }}>Sumar</button>
      {res !== null && <h3>Resultado: {res}</h3>}
    </div>
  );
}