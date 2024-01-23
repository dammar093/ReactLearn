import { useState } from 'react'

import './App.css'

function App() {
  const [countWord , setCountWord] = useState(0);
  const [countChar , setCountChar] = useState(0);
  const [text,setText] = useState('');

  const handelInput=(e)=>{

    setText(e.target.value);
    setCountChar(text.length)
    let word = text.split(' ')
    console.log(word);
    setCountWord(word.length)
    
  }
  return (
    <div className="wrapper">
      <h2>Word Counter</h2>
      <div className="wordCounter">
       <div className="inputWord">
        <textarea id="textInput" cols="30" rows="10"
        value={text}
        onChange={handelInput}
        >

        </textarea>
       </div>
       <div className="result">
        <h2>Number of words: { countWord} </h2>
        <h2>Number of charecters: { countChar} </h2>
       </div>
      </div>

    </div>
  )
}

export default App
