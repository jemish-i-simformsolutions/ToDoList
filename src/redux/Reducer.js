export const initialState={

    data:[],
    count:0
};
export const Reducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case 'addList':
            let tempData=state.data;

            return{
                ...state,
                data:[...tempData,{data:actions.data,id:state.count}],
                count:state.count+1
            };
            case 'DELETEDATA':
                let tempData1=state.data.filter((val)=>actions.data!==val.id);
                return{
                    ...state,
                    data:tempData1

                };
            
            
    
        default:
            return state;
    }



};