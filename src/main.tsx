import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'

const Router = import.meta.env.DEV ? BrowserRouter : HashRouter;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router>
      <App />
    </Router>
  </StrictMode>,
)
