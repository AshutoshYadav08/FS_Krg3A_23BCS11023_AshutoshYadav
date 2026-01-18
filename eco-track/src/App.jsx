import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
    <Header title={"EcoTrack"} />

    <Dashboard/>
    </main>
  )
}

export default App
