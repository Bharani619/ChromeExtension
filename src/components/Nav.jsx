import React, { useState } from 'react'

export const Nav = ({fav}) => {
  
  const [showFav,setShowFav] = useState(false)

  return (
    <div >
    <div style={{width:"100%",padding:"1px",top:'0',boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",textAlign:"center",cursor:"pointer"}}>
      <h3 onClick={()=>setShowFav(true)}>Fav ♡</h3>
    </div>
    {showFav && (
        <div style={{textAlign:"center",height:"auto",boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",width:"20%",margin:"auto"}}>
            {fav?.map((el,i)=>{
                return <h5 key={i}>{el}</h5>
            })}
        </div>
    )}
    </div>
  )
}
