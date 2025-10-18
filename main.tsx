import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app'
import WhoWeArePage from './WhoWeAre/page'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/WhoWeAre" element={<WhoWeArePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)