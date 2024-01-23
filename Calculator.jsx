import { useState } from "react"
import "./Calculator.css"
export default function Calculator(){

const [value,setvalue]=useState("")
const buttons=['C','1','2','3','4','5','6','7','8','9','0','.','+','-','*','/','=','Dec']

const calvalue=(buttonval)=>{
  if(buttonval==='C'){
    setvalue("")
  }
  else if(buttonval==='='){
    const calculatedval=eval(value);
    setvalue(calculatedval)

  }
  else if(buttonval==='Dec'){
    const decvalue=value.slice(0,-1);
    setvalue(decvalue)
  }
  else{
    const newval=value+buttonval;
    setvalue(newval);
  }
}

  return(
    <div className="main1">
<div className="main">
  <h3>Calculator</h3>
<div className="input"><input   style={{
          border: 'none',         // Remove border
          background: 'none',     // Remove background
          outline: 'none',        // Remove outline
          color: 'inherit',       // Use the default text color
                  
          margin: '0',            // Remove margin
          width: '100%',  
          padding:'.5rem'        // Set width to 100% of the container
        }} readOnly type="text" placeholder="0" value={value} /></div>
<div className="buttons">
 {buttons.map((button)=>(
  <button onClick={()=>calvalue(button)} key={1}>{button}</button>
 ))}
  
</div>
</div>
</div>

  )
}

