import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContexProvider from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContexProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ShopContexProvider>,
)
