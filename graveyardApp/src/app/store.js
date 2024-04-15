import { configureStore } from '@reduxjs/toolkit'
import graveyardLayoutReducer from '../reducers/graveyardLayoutSlice'



export default configureStore({
    reducer: {
        graveyardLayout: graveyardLayoutReducer,
    },
})