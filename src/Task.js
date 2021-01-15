import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Pro.css";

function Task(props) {
    const [arr,setArr]=useState([]);
    const [listComponent,setListComponent]=useState();
    
    function display_list(val){
        return(
            <>
            <div id='list'>
            {val}
            </div>
            <br/>
            </>
        );

    }
    
    function getTask(){
        
        setArr(x=>[(document.getElementById("textarea").value),...x]);  
       
        
    }
   
   console.log(arr.length)
    return(
        <>
        <div id='task'>
        <textarea id="textarea"></textarea>
         <button id="button1" onClick={getTask}>Add</button>
        
        </div>
        <div id="task_list">
        <button onClick={()=>setListComponent(arr.map(display_list))}>Show your work list here</button><br/>
         {listComponent}
        </div>
        
        </>
    );
    
}
export default Task;