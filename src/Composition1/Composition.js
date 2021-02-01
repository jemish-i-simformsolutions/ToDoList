import React from 'react';
import ReactDOM from 'react-dom';
function F1(props){
    return(
        <>
        time to enjoy
        {props.children}
        </>
    );
}
function F2(props){
    return(
    
     <F1 color='blue'>
     <h1>
     nice to meet you all guy's so see you soon all guy's {props.country} love 
     </h1>
     </F1>
     
    
    );
}
export default F2;