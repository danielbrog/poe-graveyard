import graveyardLayoutReducer from './reducers/graveyardLayoutSlice'
import { combineReducers } from 'redux'

const rootReducer= combineReducers({
    graveyardLayout: graveyardLayoutReducer   
})


export default rootReducer