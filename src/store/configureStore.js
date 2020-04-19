import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import candidateReducer from '../reducers/candidateReducer'
import applicationReducer from '../reducers/applicationReducer'
import questionReducer from '../reducers/questionReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
    candidates:candidateReducer,
    applications:applicationReducer,
    question:questionReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore