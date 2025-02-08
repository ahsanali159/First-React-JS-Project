import React, { useState } from "react"
// import PropTypes from 'prop-types'

export default function Textform(props) {
    const handleUpClick = ()=> {
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowerCase= ()=>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClear= ()=>{
        let clear = "";
        setText(clear);
        props.showAlert("Text is cleared", "success")
    }
   
    // const handleCopy = () =>{
    //     navigator.clipboard.writeText(text)
    //     .then(() =>{
    //         console.log("Text copied to clipboard!");
    //     })
        // .catch((error)=>{
        //     console.error("Failed to copy text:", error);
        // });

    // }

    const handleCopy =() => {
        let text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied", "success")

    }

    const handleExtraSpaces =() => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces is removed", "success")

    }
    const splitText =() => {
        const newText = text.split(",").map((item) => item.trim()).join("\n");
        setText(newText);
        props.showAlert("Text is Splited after comma ,", "success")

    }
    
    
    const handleOnChange = (event)=>{
        console.log("Handle on change", "success")
        setText(event.target.value);       
    }

    const [text, setText] = useState("");
    const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
    // const firstWord = text.trim().split(/\s+/)[0] || "";


    return (
    <>

<div className="container" style={{ color: props.mode=== 'dark'?'white':'black'}} >
    <h1>{props.title} </h1>
  <div className="mb-3 my-3">
  <textarea className="form-control"  value={text} id="my-box"  style={{ backgroundColor: props.mode=== 'dark'?'black':'white', color: props.mode=== 'dark'? 'white':'black'}} onChange={handleOnChange} rows="6"> </textarea>
   </div>
<button className="btn btn-primary btn-sm mx-1"  onClick={handleUpClick}>Convert to UPPERCASE</button>
<button className="btn btn-primary btn-sm mx-1" onClick={handleLowerCase}>Convert to lowercase</button>
<button className="btn btn-primary btn-sm mx-1" onClick={handleCopy}>Copy </button>
<button className="btn btn-primary btn-sm mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
<button className="btn btn-primary btn-sm mx-1" onClick={splitText}>Text Split After , </button>
{/* <button className="btn btn-primary btn-sm mx-1" onClick={handlePaste}>Paste </button> */}
<button className="btn btn-primary btn-sm mx-1" onClick={handleClear}>Clear</button>
</div>

<div className="container" style={{ color: props.mode=== 'dark'?'white':'black'}}>
<h2>Your Text Summary </h2>
<p>{wordCount} Words and {text.length} Characters </p>
<p>{0.008 * wordCount} Minutes Read </p>
{/* <p>{firstWord || "No Words Available"}</p> */}
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the above textbox above to preview it here"}</p>
</div>

    </>
)};