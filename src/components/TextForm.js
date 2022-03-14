import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = ""
        setText(newText)
    }
    // function handleOnChange(event) {
    //     setText(event.target.value);
    // }
    // function handleUpClick(event) {
    //     let newText = text.toUpperCase();
    //     setText(newText);
    // }
    return (
        <div>
            <div className="container mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>LowerCase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
