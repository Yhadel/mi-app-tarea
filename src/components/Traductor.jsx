import React, { useState } from 'react';

export default function Traductor() {
  const [num, setNum] = useState('');
  const [texto, setTexto] = useState('');

  const traducir = () => {
    const n = parseInt(num);
    if (isNaN(n) || n < 1 || n > 1000) return setTexto('Ingrese un número del 1 al 1000');
    if (n === 1000) return setTexto('Mil');
    if (n === 100) return setTexto('Cien');

    const u = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const esp = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const d = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const c = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    let cen = Math.floor(n / 100);
    let dec = Math.floor((n % 100) / 10);
    let uni = n % 10;
    let res = '';

    if (cen > 0) res += c[cen] + ' ';
    if (dec === 1) {
      res += esp[uni];
      return setTexto(res.trim());
    } else if (dec === 2 && uni > 0) {
      res += 'veinti' + u[uni];
      return setTexto(res.trim());
    } else if (dec > 0) {
      res += d[dec] + (uni > 0 ? ' y ' : '');
    }
    if (uni > 0 && dec !== 1 && dec !== 2) res += u[uni];

    setTexto(res.trim());
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Traductor de Números a Letras</h2>
      <input type="number" min="1" max="1000" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Ej: 542" />
      <button onClick={traducir} style={{ marginLeft: '10px' }}>Traducir</button>
      {texto && <h3 style={{ textTransform: 'capitalize', color: '#1B2A4A' }}>{texto}</h3>}
    </div>
  );
}