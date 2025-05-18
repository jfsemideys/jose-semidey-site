import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter basename="https://jfsemideys.github.io/jose-semidey-site/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
