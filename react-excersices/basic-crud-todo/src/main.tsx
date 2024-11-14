import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router.tsx'
import { ToastContainer } from 'react-toastify'
import '../node_modules/react-toastify/dist/ReactToastify.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
    <ToastContainer />
  </StrictMode>,
)
