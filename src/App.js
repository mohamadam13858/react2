import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Hello from './Hello';
import Timer from './Timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "سلام دوستان عزیزم"
    }
    this.handleSetTitle = this.handleSetTitle.bind(this)
  }

 /* handleSetTitle = () => {
    this.setState({
      title: "من محمدم"
    })
  }*/
  handleSetTitle(){
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
}

export default App;