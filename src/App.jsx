import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)
  function handleClickMe(params) {
    alert('clicked')
  }

  const handleClickMe2 = (num) => {
    alert(num + 2);
  }
  return (
    <>
      <h1>React Core Concepts</h1>

      <Users></Users>

      <Team> </Team>

      <Counter> </Counter>

      <button onClick={handleClickMe}>Click Me</button>
      {/* if function have a paremetar */}
      <button onClick={() => handleClickMe2(5)}>Click Me2</button>
    </>
  )
}

export default App
