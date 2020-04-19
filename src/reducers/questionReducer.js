const initialState=[]

const questionReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LIST_QUESTION':{
            return action.payload

        }
        default:{
            return state
        }
    }
}

export default questionReducer