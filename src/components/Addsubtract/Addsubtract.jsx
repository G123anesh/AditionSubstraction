import { useState } from "react"

const Addsubtract = ()=>{
    const[text, setText] = useState('')
    const[out, setOut] = useState(0)
    
    const value = (e)=> setText(e.target.value)
    const addition = ()=> setOut(Number(out)+Number(text))
    const substraction = ()=> setOut(Number(out)-Number(text))
   
    return (
        <main>
            <h2>Enter a value to add/substract </h2>
            <input  type="Number" onChange={value} value={text}/>
            <button type="button" id="add" onClick={addition}>Add</button>
            <button type="button" id="sub" onClick={substraction}>Substract</button>
            <div>
                <span>Result: </span>
                <div id="Result">{out}</div>
            </div>
        </main>
    )
}  
export default Addsubtract