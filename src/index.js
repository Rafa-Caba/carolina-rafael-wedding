import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProverdorInvitados } from './contexts/contextoInvitados';

ReactDOM.render(
  <React.StrictMode>
    <ProverdorInvitados>
      <App />
    </ProverdorInvitados>
  </React.StrictMode>,
  document.getElementById('root')
);