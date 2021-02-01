import React from 'react';
import ReactDOM from 'react-dom';
import '../Pro.css';
function Component3(Component1,Component2){
    return class extends React.Component{
        render(){
            return(
             <>
             {
                 Component2.map((val)=>{
                     return(
                         <div id="hoc">
                    <Component1 img={val.img} comments={val.comments}/>
                    </div>
                     );
                 })
             }
             </>
            );
        }
    };
}
export default Component3;
