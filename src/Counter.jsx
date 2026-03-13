import { useState } from 'react'
 
function Counter() {
  const [count, setCount] = useState(0)
 
  function laskuri(action) {
    setCount(count + action) 
  }

  function reset() {
    setCount(0)
  }
  return (
    <div>
      <Number count={count}/>
      <Increment onClick={() => laskuri(1)}/>
      <DoubleIncrement onClick={() => laskuri(2)}/>
      <Decrement onClick={() => laskuri(-1)}/>
      <Reset onClick={reset}/>
    </div>
  )
}

function Increment({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Increment number
      </button>
    </div>
  )
}

function DoubleIncrement({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Double increment number
      </button>
    </div>
  )
}

function Decrement({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Decrement number
      </button>
    </div>
  )
}

function Reset({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Reset number
      </button>
    </div>
  )
}

function Number({ count }) {
  return (
    <div>
      <h2>The number: {count}</h2>
    </div>
  )
}
  
export default Counter