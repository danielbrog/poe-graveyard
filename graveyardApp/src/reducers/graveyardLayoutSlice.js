import graveSetup from "../utilities/graveSetup";
import { createSlice } from '@reduxjs/toolkit';

const initialState = graveSetup();

export const graveyardLayoutSlice = createSlice({
    name: 'graveyardLayout',
    initialState: initialState,
    reducers: {
        addGrave: (state, action) => {
            //can't drop corpse on wall
            if (action.payload.isWall){
                return
            }
            state[action.payload.y][action.payload.x] = action.payload
        }
    }
})

export const { addGrave } = graveyardLayoutSlice.actions

export default graveyardLayoutSlice.reducer