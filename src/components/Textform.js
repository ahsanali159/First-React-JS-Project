import { useState } from "react"

export default function Textform(props) {
    const handleUpClick = ()=> {
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLowerCase= ()=>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase)
    }
    const handleClear= ()=>{
        let clear = "";
        setText(clear)
    }


    const handleOnChange = (event)=>{
        console.log("Handle on change")
        setText(event.target.value);       
    }
    const [text, setText] = useState("");
    return (
    <>

<div className="container">
    <h1>{props.title} </h1>
  <div className="mb-3 my-3">
  <textarea class="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="6"></textarea>
    </div>
<button className="btn btn-primary btn-sm mx-1"  onClick={handleUpClick}>Convert to UPPERCASE</button>
<button className="btn btn-primary btn-sm mx-1" onClick={handleLowerCase}>Convert to lowercase</button>
<button className="btn btn-primary btn-sm mx-1" onClick={handleClear}>Clear</button>
</div>

<div className="container">
<h2>Your Text Summary </h2>
<p>{text.split(" ").length} Words and {text.length}</p>
<p>{0.008 * text.split(" ").length} Minutes Read </p>
<h2>Preview</h2>
<p>{text}</p>
</div>
    </>
    )
}
