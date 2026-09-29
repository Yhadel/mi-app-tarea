import React, { useState } from 'react';

export default function Tabla() {
  const [num, setNum] = useState('');
  const [lista, setLista] = useState([]);

  const generar = () => {
    const val = parseInt(num);
    if (isNaN(val)) return;
    const items = [];
    for (let i = 1; i <= 13; i++) {
      items.push(`${val} x ${i} = ${val * i}`);
    }
    setLista(items);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Tabla de Multiplicar (Hasta el 13)</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Número" />
      <button onClick={generar} style={{ marginLeft: '10px' }}>Generar</button>
      <ul>
        {lista.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}