import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Component1 extends React.Component{
constructor(props){
    super(props);
    this.state={flag:true,cmnt:""};
    
    
}
showComments(){
    if(this.state.cmnt.localeCompare('')==0)
    {this.setState({cmnt:this.props.comments})}
    else
    {
        this.setState({cmnt:''});
    }
}



render(){
    
    return(
     <>
     <div><img src={this.props.img} /></div>
     <div><button onClick={this.showComments.bind(this)}>Show comments</button></div>
     <div>{this.state.cmnt}</div>
     <br/>
     </>
    );
}
} 
export default Component1;