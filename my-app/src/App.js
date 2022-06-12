//import logo from './logo.svg';
import './App.css';
import './component/Navbar.js'
import React, {useState} from 'react'

//import About from './component/About.js';
import Navbar from './component/Navbar.js';

import TextForm from './component/TextForm.js';
import Alert from './component/Alert';



//let name="vrushabh"
function App() {
  const [mode,setmode]=useState("light")
  const [alert,setalert]=useState(null)
  const showAlert=(message,type)=>
{
  setalert(
    {
msg:message,
type:type
    }
  )
}
const togglemode=()=>
{
  if(mode==="dark")
  {
    setmode("light");
    document.body.style.backgroundColor='white'
 showAlert("light mode enable","sucess")
 document.title="TextUtils - Light mode"

  }
  else
  
  {
    setmode("dark");
    document.body.style.backgroundColor='#3d6287'
    showAlert("dark mode enable","sucess")
    document.title="TextUtils - Dark mode"
  }
 
  

}
setTimeout(()=>{setalert(null)},5000)
  return (
    <>
    <router>


    {/*<Navbar/>*/}
   <Navbar title="WELCOME" about="About us" mode={mode} togglemode={togglemode} />
   <Alert alert={alert}/>
   <div className="container">
  
   <TextForm showAlert={showAlert} Heading="Enter data here."/>
{/*<About/>*/}
   </div>
   </router>
   </>
  );
}

export default App;
