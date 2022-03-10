import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Bienvenida from './components/Bienvenida';
import Confirmacion from './components/Confirmacion';
import Despedida from './components/Despedida';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/:codigo" element={<Bienvenida />} />
          <Route path="/confirmacion/:codigo" element={<Confirmacion />} />
          <Route path="/despedida/:trigger" element={<Despedida />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
