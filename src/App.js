import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Hello from './Hello';
import Timer from './Timer';

/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "سلام دوستان عزیزم"
    }
  }

  handleSetTitle = () => {
    this.setState({
      title: "من محمدم"
    })
  }

 

  render() {
    return (
      <div className="main">
        <Hello title={this.state.title} />
        <Timer handleSetTitle={this.handleSetTitle} />
      </div>
    )
  }
}*/
const App = ()=>{
  const [title , setTitle] = useState("سلام دوستان عزیزم");
  const handleSetTitle = ()=>{
    setTitle("من محمدم")
  }
  return(
    <div className="main">
    <Hello title={title} />
    <Timer x={handleSetTitle} />
  </div>
  )
}

export default App;