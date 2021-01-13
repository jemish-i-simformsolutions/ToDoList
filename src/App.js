import React, { useState } from 'react';
import "./Pro.css";
import Task from "./Task";



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
   }
   
   
    render(){
        
        return(
            <>
            <div id="heading">To Do List</div>
            <div>
            <Task/>
            </div>
         
            </>

        );
    }
}
export default App;
