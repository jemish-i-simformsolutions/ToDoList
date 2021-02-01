import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            x:'',
            arr:[]
        };
    }
    
   
    
    

    render(){
        return(
       <>
       <div id="combo1">
       <div id="subcombo1">
       
           <textarea id="tarea" onChange={(e)=>this.setState({x:e.target.value})}  placeholder="Enter your work list here" />
       
       </div>
       <div id="subcombo1">
       <div id='addbtn'>
      
           <button id="btn1" onClick={()=>{
               this.setState(y=>({arr:[...y.arr,this.state.x]}));
                  
            }} ><AddCircleIcon/></button>
        </div>
       </div>
       <div id="tasklist">
       {console.log(this.state.arr)}
       {this.state.arr.map((val)=>{
                   return(
                    <>
                    <div id="task">
                    {val}<button id="delbtn" onClick={()=>this.setState({arr:this.state.arr.filter((item)=>item!=val)})}><DeleteIcon/></button>
                    </div>
                    <br/>
                    </>
                   );
               })
        }
        </div>
       </div>
      
       </>
        );
    }
}
export default MainComponent;