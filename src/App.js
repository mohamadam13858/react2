import React , {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Hello from './Hello';
import Timer from './Timer';
import TimeList from './TimeList';

const App = ()=>{
  const [title , setTitle] = useState("سلام دوستان عزیزم");
  const [isLight , setisLight] = useState(false);
  const [timeArr , setTimeArr] = useState(["00 : 05 : 12 " , "00 : 06 : 32"])


/*useEffect(()=>{
console.log("useEffect");
return ()=>{
  
}

},[isLight])
*/
  const handleSetIsLight = ()=>{
    setisLight(!isLight)
  }
  return(
    <div className="main" style={{background:isLight ? "white" : "black"}}>
    <Hello title={title} />
    <Timer timeArr={timeArr} setTimeArr={setTimeArr} isLight={isLight} x={handleSetIsLight} />
  </div>
  )
}

export default App;