const initialState=[]

const candidateReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LIST_CANDIDATE':{
            return action.payload

        }
        default:{
            return state
        }
    }
}

export default candidateReducer