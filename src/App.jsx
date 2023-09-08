import './App.css'
import Friends from './Friends'
import Users from './Users'
import Counter from './counter'
import Team from './team'

function App() {
  
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Comcepts 2</h2>

      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('button 3 clicked')}}>click3</button>
      {/* different when pass perameter */}
      <button onClick={() => addToFive(3)}>click 4</button>
      
     
    </>
  )
}

export default App
