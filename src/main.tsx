import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import './components/stripe-gradient.js'

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);
