import React from 'react';
import Classical from './Classical';
import Functional from './Functional';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
     functionclick:false,
     classclick:false
    };
  }
  render(){

  

// function App() {
//   const[status,setStatus]=React.useState(false);
  return (
    <>
      <h1 className='head'>STYLING USING FUNCTIONAL AND CLASS COMPONENTS</h1>
  
  <div className='btn'>
  <button type='button' onClick={()=>this.setState({functionclick: !this.state.functionclick})}>TO See Styling In Functional Component</button>
  <button type='button' onClick={()=>this.setState({classclick: !this.state.classclick})}>TO See Styling In Class Component</button>
  </div>
  
  <div className='card'>
  {this.state.classclick && <Classical/> }
  {this.state.functionclick && <Functional/>}
  </div>
 </>

  )
}
}
 export default App;
