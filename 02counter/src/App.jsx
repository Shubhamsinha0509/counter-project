import { useState } from 'react'

import './App.css'

function App() {
  const[count,setCount] = useState(20)  // The first value you see here is variable and 2nd is function
// let counter = 30

 const addValue = ()=>{
  setCount(count+1)
 }
 const removeValue = () =>{
setCount(count-1)
 }

  return (
    <>
  <h1>Code with me {count}</h1>   
  <h2>counter value : {count}</h2>
  
  <button onClick={addValue}> Add value </button> {"  "}
  <button onClick={removeValue}> Remove value </button>
  <p>footer : {count}</p>   
    </>
  )
} 

export default App 
