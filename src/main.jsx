import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context/CardGameContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
      <App />
  </Provider>
)
