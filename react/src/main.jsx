import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Wrapper component that checks for deprecated library , unsafe cycle methods, legacy context api
  <React.StrictMode>  
      {/* <p>Hello</p> */}
    <App />
  
  </React.StrictMode>,
)
