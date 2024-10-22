import React , {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Hello from './Hello';
import Timer from './Timer';

const App = ()=>{
  const [title , setTitle] = useState("سلام دوستان عزیزم");
  const [isLight , setisLight] = useState(false);


useEffect(()=>{
console.log("useEffect");

},[isLight])

  const handleSetIsLight = ()=>{
    setisLight(!isLight)
  }
  return(
    <div className="main" style={{background:isLight ? "white" : "black"}}>
    <Hello title={title} />
    <Timer isLight={isLight} x={handleSetIsLight} />
  </div>
  )
}

export default App;