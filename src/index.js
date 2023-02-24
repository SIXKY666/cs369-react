import React from 'react';
import ReactDOM from 'react-dom/client';
import AppFilter from './AppFilter'
import AppCounter from './AppCounter'
import Hello from './AppHello'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppFilter />
  </React.StrictMode>
);

