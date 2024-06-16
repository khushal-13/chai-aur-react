import { useState } from 'react';
import './App.css'


function App() {

  // 1 argument : contains variable, 2 : the function responsible for updating the variable
  let [count, setCounter] = useState(0)
 
  let increase = ()=> {
    count += 1;
    setCounter(count)
    console.log('Clicked', count)
  }

  let decrease = ()=> {
    if(count > 0) {
      setCounter(count-1)
    }
    else{
      alert('Aur kitna ghatayega..!!')
    }
  }

  return (
    <>
      <h1> Counter : {count} </h1>
      <button onClick={increase}> Increase </button>
      <br/><br/>
      <button onClick={decrease}> Decrease </button>
      
    </>
  )
}

export default App
