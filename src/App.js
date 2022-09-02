
import { useState } from 'react';
import './App.css';
import {Vocab} from './vocabList';

function App() {
  const [showContent,setShowContent] = useState(false);
  const randomNumber = Math.floor(Math.random() * Math.floor(Vocab.length))
   
  
  return (
    <>
    <div className="App" onClick={()=>setShowContent(true)}>
     <h1>{Vocab[randomNumber].FIELD1}</h1>
     <p>{Vocab[randomNumber].FIELD2}</p>    
    </div>

     {showContent && (
      <div className='App'>
      <button>ADD TO FAVOURITE</button>
    </div>
     )}
    </>
  );
}

export default App;
