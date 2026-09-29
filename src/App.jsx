import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './components/Inicio';
import Sumadora from './components/Sumadora';
import Traductor from './components/Traductor';
import Tabla from './components/Tabla';
import Experiencia from './components/Experiencia';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sumadora" element={<Sumadora />} />
            <Route path="/traductor" element={<Traductor />} />
            <Route path="/tabla" element={<Tabla />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}