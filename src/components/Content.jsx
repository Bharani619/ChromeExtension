import React, { useEffect, useState } from 'react'
import Button from './Button';
import {Vocab} from '../vocabList';
import { Nav } from './Nav';

 const Content = () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(Vocab.length))
    const [fav,setFav] = useState([]);
    
    const onClick = ()=>{
      setFav([...fav,Vocab[randomNumber].FIELD1]);
    } 
  
    return (
    <>
     <Nav fav={fav}/>
    <div>
     <h1>{Vocab[randomNumber].FIELD1}</h1>
     <p>{Vocab[randomNumber].FIELD2}</p>    
    </div>
       <Button onClick={onClick}/>
    </>
  )
}

export default React.memo(Content);
