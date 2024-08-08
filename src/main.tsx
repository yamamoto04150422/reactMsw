import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { worker } from './mock/browser';
import ApiButton from './fetch/ApiButton.tsx';


if (process.env.NODE_ENV === 'development') {
  // const { worker } = require('../mocks/browser');
  worker.start();
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiButton />
    <App />
  </StrictMode>,
)
