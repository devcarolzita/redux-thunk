import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DoguinhosCard from './components/DoguinhosCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Doguinhos!
        <DoguinhosCard />
      </div>
      
    </>
  )
}

export default App
