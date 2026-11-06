import { useState } from "react";

const App =()=>{
  const [count,setCount] = useState(0)

  const handleIncrease =()=>{
    setCount(count+1)
  }

  const handleDecrease =()=>{
    setCount(count-1)
  }

  return (
    <>
    <h1>Counter App </h1>
    
    <button onClick={handleIncrease}>Increase the count <h1>{count}</h1></button>
     <button onClick={handleDecrease}>Decrease the count <h1>{count}</h1></button>
    </>
  )
}
export default App;