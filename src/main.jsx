import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContextShare from './context/Contextshare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ContextShare>
        <App />
      </ContextShare>
    </BrowserRouter>
  </StrictMode>,
)
