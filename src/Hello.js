import React from 'react';
import ReactDOM from 'react-dom';



class Hello extends React.Component{
    render(){
      console.log(this.props);
      
      return(
        <h1>{this.props.title}</h1>
      )
    }
  }

  export default Hello;