import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Pro.css";

function Task(props) {
    const [arr,setArr]=useState([]);
    const [listComponent,setListComponent]=useState();
    
    function display_list(val){
        return(
            <>
            <br/>
            <div id='list'>
            {val} <button id="delete" onClick={()=>{
            setArr(arr.filter((item)=>item!=val));
            }}><DeleteIcon/></button>
            </div>
            </>
        );

    }
    
    function getTask(){
        
        setArr(x=>[(document.getElementById("textarea").value),...x]);  
    }
    function btn_name(){
        let btn_nm="Show list here";
        if(listComponent){
            btn_nm="hide list"; 
        }
        else{
            
            btn_nm="show list here";
        }
        return (
            <>
            hello
            </>
        );
        
    }
   
   console.log(arr.length)
    return(
        <>
        <div id='task'>
        <textarea id="textarea"></textarea>
         <button id="button1" onClick={getTask}>Add</button>
        </div>
        <div id="task_list">
        <button onClick={()=>setListComponent(arr.map(display_list))}>Show list here</button>
        
        <br/>
         {listComponent}
        </div>
        
        </>
    );
    
}
export default Task;