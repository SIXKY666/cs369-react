import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppCounter'
import Hello from './AppHello'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);

