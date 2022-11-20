import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
const [counter,setCounter]=useState(0);
const add=(e)=>{
  setCounter(counter+1)
}
const del=(e)=>{
  setCounter(counter-1)
}

  return (
    <div>

<div>Counter : ( {counter} )</div>
      <button onClick={add} className='btn btn-dark'> +1</button>
      <button onClick={del} className='btn btn-danger'> -1</button>

    </div>
  )
}

export default App