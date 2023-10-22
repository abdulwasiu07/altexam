import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './errorboundary.jsx'
import App from './App.jsx'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <React.StrictMode>
      <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </React.StrictMode>
    </BrowserRouter>,
);
