import { useState } from 'react'
import './App.css'
import NaveBar from './components/basic_app'
import new_name from './components/new_name'

function App() {
  const [count, setCount] = useState(0)

  const Nome = "Stela"

  return (
    <div className="App">
      
      <NaveBar Nome={Nome} />

      <h1>Olá mundo cruel!</h1>
      
      <new_name />

    </div>
  )
}

export default App
