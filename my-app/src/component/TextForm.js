import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('')

    const handleUppercase= () =>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("convetred to uppercase","sucess");
    }
    const handleTitlecase= () =>
    {
        let newText=text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        setText(newText);
        props.showAlert("convetred to titlecase","sucess");
    }
    
    const HandleCleartext= () =>
    {
        
        setText("");
        props.showAlert("text clered","sucess");
    }

    const handlelowercase= () =>
    {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("convetred to lowercase","sucess");
    }

    const count = ()=>{
        if (text.length>0){
        return text.trim().split(/[ ]+/).length;
        }
        else{
        return 0;
        }
        }
    const Handlespace= () =>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Space Handled","sucess");
    }
    

    const handleonchange= (event) =>
    {
        setText(event.target.value);
    }
    
  return (
      <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    
      <h1>{props.Heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode=='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleTitlecase}>TitleCase</button>
<button className="btn btn-primary mx-2" onClick={handleUppercase}>Uppercase</button>



<button className="btn btn-primary mx-2" onClick={handlelowercase}>Lowercase</button>
<button className="btn btn-primary mx-2" onClick={HandleCleartext}>Clear</button>
<button className="btn btn-primary mx-2" onClick={Handlespace}>Remove extra space</button>

    </div>
    <div className="container my-3"  style={{color:props.mode==='light'?'white':'black'}} >
        <h2>Text summary</h2>
        <p>no of words <b>{count()}</b>  total characters <b> {text.length} </b> no of lines <b> {text.split("\n").length}</b></p>
        <p><b> {0.008 *text.split(" ").length} </b>time taken
        </p>
        <h2>Preview</h2>
        <p>{text}</p>


    </div>
    </>
  )
}
