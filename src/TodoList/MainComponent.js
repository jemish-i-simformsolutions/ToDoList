import React, {Component, useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import {bindActionCreators} from 'redux';
import {addList,deleteData} from '../Actions/ActionProvider'
import {connect} from 'react-redux';
import '../Pro.css'

const mapStateToProps=(state)=>{
return{
    data:state.data,
    count:state.count
}
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({addList,deleteData},dispatch);

}

class MainComponent extends Component{
    
    data1="";
    
   addData=()=>{
       this.props.addList(this.data1);
   }
   deleteTask=(val)=>{
       this.props.deleteData(val);
   }
    
    

    render(){
        return(
       <>
       <div id="combo1">
       <div id="subcombo1">
       
           <textarea id="tarea" onChange={(event)=>{this.data1=event.target.value}}  placeholder="Enter your work list here" />
       
       </div>
       <div id="subcombo1">
       <div id='addbtn'>
      
           <button id="btn1" onClick={this.addData} ><AddCircleIcon/></button>
        </div>
       </div>
       <div id="tasklist">
       {console.log(this.props.count)}
       <ul>
       {this.props.data.map((val)=>{
                   return(
                    <>
                    
                    <div id="task" key={val.id}>
                    {val.data}
                    </div>
                  <div id='subtask'>
                    <button onClick={()=>this.deleteTask(val.id)}><DeleteIcon/></button>
                   </div>
                    <br/>
                    </>
                   );
               })}
        </ul>
        </div>
       </div>
      
       </>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);