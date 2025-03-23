import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot do React 18
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import FormVoluntario from './components/FormVoluntario';
import './index.css';

// Cria a raiz da aplicação usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação
root.render(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<App />} />
                <Route path="/form-voluntario" element={<FormVoluntario />} />
            </Routes>
        </BrowserRouter>
);