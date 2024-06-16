import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardTwo } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-yellow-400 text-white p-4 rounded-xl'> Khushal Jogi</h1> */}
      <CardTwo username="khushal" btnText = "Visit Me"/>
      <CardTwo username="jogi" btnText = "Click Me"/>
    </>
  )
}

export default App
