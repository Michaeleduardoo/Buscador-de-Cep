import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Globalstyled from './global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyled/>
    <App />
  </React.StrictMode>,
)
