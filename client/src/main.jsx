import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextWrapper from './store/ContextStore.jsx'
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextWrapper>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <App />
    </ContextWrapper>
  </StrictMode>,
)
