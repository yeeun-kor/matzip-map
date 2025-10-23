import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
const App = React.lazy(() => import('./App.tsx'));
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
