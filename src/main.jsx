import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Scoreboard.jsx'
import Scoreboard from './Scoreboard.jsx'
import ScoreTally from './ScoreTally.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Scoreboard /> */}
    <ScoreTally />
  </React.StrictMode>,
)
