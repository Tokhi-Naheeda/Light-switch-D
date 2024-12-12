import {useState} from 'react'
import './index.css'
const Room=()=>{
    const [isOn, setIsOn]=useState(true);
    return(
    <div className={isOn? 'lit': 'dark'}>
        {
            isOn ? <p>The room ist lit</p> : <p>The room ist dark</p>
            
        }
      <button onClick={()=>setIsOn(!isOn)}>Light switch</button>
    </div>
    )
}
export default Room