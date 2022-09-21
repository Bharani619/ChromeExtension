import React from 'react'

const Button = ({onClick}) => {
   
  return (
    <div className='App'>
    <button onClick={onClick}>ADD TO FAVOURITE</button>
  </div>
  )
}

export default React.memo(Button)