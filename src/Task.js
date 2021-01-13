import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Pro.css"

function Task(props) {
    const [task1,setTask1]=useState("");
    const [arr,setArr]=useState([]);
    return(
        <>
        <div id='task'>
        <textarea id="textarea"></textarea>
         <button id="button1" onClick={()=>{
            
            setTask1(document.getElementById("textarea").value);
            
            document.getElementById('textarea').value="";
            setArr(x=>[...x,task1]);
            console.log(arr.toString())
            
             
        }}>
             Add</button>
        </div>
        <div id="task_list">
        {arr}
    
        </div>
        
        </>
    );
    
}
export default Task;