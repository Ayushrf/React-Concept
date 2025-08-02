import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value,setValue]=useState(0);
  return (
    <>
        <p>The count is at {value}</p>
        <button style={{border:"2px solid black",color: "white",backgroundColor: "black"}} onClick={()=>{setValue(value+1)}}>Click Me</button>
    </>
  )
}

export default App
