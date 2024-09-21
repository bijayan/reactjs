import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    //setText("You have clicked on handleUpclicked");
    setText(newText);
    props.showAlert("converted to upper case","success");
  }
  const handleLoClick=()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    //setText("You have clicked on handleUpclicked");
    setText(newText);
    props.showAlert("converted to lower case","success");
  }
  const handleClearClick=()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = '';
    //setText("You have clicked on handleUpclicked");
    setText(newText);
  }
   const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
   const handleSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
 
  const handleOnChange=(event)=>{
    //console.log("On change");
    setText(event.target.value);
  }
   //const [text, setText] = useState('Enter text here');
   const [text, setText] = useState('');
   //text = "new text";//wrong way to change the state
   //setText("new text");//correct way to change state
  return (
    <>
    <div className="container" style={{color:props.mode === "light" ? "black" : "white"}}>
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === "light" ? "white" : "gray" ,color:props.mode === "light" ? "black" : "white"}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear text </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy text </button>
      <button className="btn btn-primary mx-1" onClick={handleSpace}> Remove Extra Space </button>
    </div>
    <div className="container my-3"style={{color:props.mode === "light" ? "black" : "white"}}>
      <h2>Your text summery</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter the text in the above box to previed it here"}</p>

    </div>
    </>
  );
}
