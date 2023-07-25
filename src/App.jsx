import { useState } from 'react'
import './App.css'

function App() {

  const [word, setWord] = useState(0);
  const [char, setChar] = useState(0);
  const [sentence, setSentece] = useState(0);
  const [pharagraph, setPharagraph] = useState(0);
  const [text]= useState([])

  const handleKeyChange=(e)=>{
    if(e.code === 'Backspace')
      text.pop();
    else if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123) || e.keyCode == 32 || (e.keyCode >= 48 && e.keyCode <= 57)|| (e.keyCode >= 186 && e.keyCode <= 222)){
      text.push(e.key)
    }
    setChar(text.length);
    setWord(text.filter(value => value === " ").length)
    setSentece(text.filter(value => value === "." || value === ";" ||value === "?").length)
  }

  return (
    <div className='App'>
      <h1>Text Analyzer </h1>
      <div className='container'>
        <div className='txt-analysis'>
          <h2>Char: {char}</h2>
          <h2>Sentence: {sentence}</h2>
          
        </div>
        <div className='txt-analysis'>
          <h2>Word: {word}</h2>
          {/* <h2>Pharagraph: {pharagraph}</h2> */}
        </div>
        
        <textarea className='input' name="" id="" cols="30" rows="10"  onKeyDown={handleKeyChange}>

        </textarea>
      </div>
    </div>
  
  )
}

export default App
