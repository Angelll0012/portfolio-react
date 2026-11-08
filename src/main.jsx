// import React's strict-mode wrapper for development checks
import { StrictMode } from 'react'
// import the React DOM API used to mount the application
import { createRoot } from 'react-dom/client'
// load the global stylesheet before rendering the app
import './index.css'
// import the top-level application component
import App from './App.jsx'

// create the React root from the page's designated mount element
createRoot(document.getElementById('root')).render(
  // enable additional development-time checks for the component tree
  <StrictMode>
    {/* render the portfolio application as the root component */}
    <App />
    {/* close the strict-mode wrapper around the app */}
  </StrictMode>,
  // finish the render call with its trailing argument separator
)
