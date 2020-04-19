const initialState=[]

const applicationReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LIST_APPLICATION':{
            return action.payload

        }
        default:{
            return state
        }
    }
}

export default applicationReducer