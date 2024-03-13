import Countries from './Components/Countries/Countries'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClickMe() {
    alert('clicked')
  }

  const handleClickMe2 = (num) => {
    alert(num + 2);
  }
  return (
    <>
      <h1>React Core Concepts</h1>
      <Countries></Countries>

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
