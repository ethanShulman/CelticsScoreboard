import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scoreboard from './Scoreboard'
import ScoreTally from './ScoreTally'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='main-header'>Celtics vs. Opponent</h1>
    </>
  )
}

export default App
