import React from 'react';
import './App.css';
class Classical extends React.Component{

    render(){
        return(
            <div className='box box1'>

            <h1 >This Is Created Using Class Component</h1>
             <p className='p'>This Done By Using External css</p>
             <h4 style={{color:'green'}} >This Is Done By Using Inline Css</h4>
             </div>
            )
    }
}
export default Classical;