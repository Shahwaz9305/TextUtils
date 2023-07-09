import React, { useState } from 'react'

export default function TextForm(props) {

  const handleOnChange = (e) => {

    setText(e.target.value);
  }
  const handleUpClick = () => {

    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  }
  const handleLowClick = () => {

    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lovercase","success")
  }
  const handleClear = () => {
   
    setText('');
    props.showAlert("Text is Cleared ","success")
  }
  const handleCopy = () => {
    let text= document.getElementById('myBox');
    
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to Clipboard","success")
  }
  const handleSpaces=()=>{
   let newtext= text.split(/[ ]+/);
   setText(newtext.join(" "));
   props.showAlert("Extra spaces removed","success")
  }
  const [text, setText] = useState('')
  // setText()
  return (
    <>
   
    <div className='container'style={{color:props.mode==='dark'?'white':'#0b032e'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"  style={{backgroundColor:props.mode==='dark'?'#0b032e':'white',color:props.mode==='dark'?'white':'#0b032e'}}></textarea>
      </div>
      <button className="btn btn-primary  mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0b032e'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length - ((text.length===0?1:0)||text.charAt(text.length-1)===' '?1:0)} words and {text.length} character</p>
      <p>{0.008* text.split(" ").length}  minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
