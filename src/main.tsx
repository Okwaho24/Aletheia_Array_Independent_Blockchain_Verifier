import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Universal AI Application</h1>
      <p>Successfully decoupled from Grok/xAI and running in Termux.</p>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
