import graveSetup from "../utilities/graveSetup";
import { createSlice } from '@reduxjs/toolkit';

const initialState = graveSetup();

const addDec = (num, toAdd) => {
    return Math.round((num + toAdd + Number.EPSILON) * 100 ) / 100
}

export const graveyardLayoutSlice = createSlice({
    name: 'graveyardLayout',
    initialState: initialState,
    reducers: {
        addGrave: (state, action) => {
            //can't drop corpse on wall
            if (action.payload.isWall){
                return
            }

            //update row weights
            if (action.payload.corpse.short ==='Row'){
                for (let xLoc=action.payload.x; !state[action.payload.y][xLoc].isWall; xLoc--){
                    state[action.payload.y][xLoc].plotWeight += 25
                }
                for (let xLoc=action.payload.x+1; !state[action.payload.y][xLoc].isWall; xLoc++){
                    state[action.payload.y][xLoc].plotWeight += 25
                }
            //update column weights
            } else if (action.payload.corpse.short ==='Col'){
                for (let yLoc=action.payload.y; !state[yLoc][action.payload.x].isWall; yLoc--){
                    state[yLoc][action.payload.x].plotWeight += 25
                }
                for (let yLoc=action.payload.y+1; !state[yLoc][action.payload.x].isWall; yLoc++){
                    state[yLoc][action.payload.x].plotWeight += 25
                }
            //update adjacent weights
            } else if (action.payload.corpse.short ==='Adj'){

                //update horizontal adjacent
                state[action.payload.y-1][action.payload.x].plotWeight = state[action.payload.y-1][action.payload.x].isWall?1:addDec(state[action.payload.y-1][action.payload.x].plotWeight,40)
                state[action.payload.y+1][action.payload.x].plotWeight = state[action.payload.y+1][action.payload.x].isWall?1:addDec(state[action.payload.y+1][action.payload.x].plotWeight,40)
                //update vertical adjacent
                state[action.payload.y][action.payload.x+1].plotWeight = state[action.payload.y][action.payload.x+1].isWall?1:addDec(state[action.payload.y][action.payload.x+1].plotWeight,40)
                state[action.payload.y][action.payload.x-1].plotWeight = state[action.payload.y][action.payload.x-1].isWall?1:addDec(state[action.payload.y][action.payload.x-1].plotWeight,40)
            }

            state[action.payload.y][action.payload.x].corpse = action.payload.corpse
        },
        removeGrave: (state, action) => {
            //can't remove walls
            if (action.payload.isWall){
                return
            }

            //update row weights
            if (action.payload.corpse.short ==='Row'){
                for (let xLoc=action.payload.x; !state[action.payload.y][xLoc].isWall; xLoc--){
                    state[action.payload.y][xLoc].plotWeight -= 25
                }
                for (let xLoc=action.payload.x+1; !state[action.payload.y][xLoc].isWall; xLoc++){
                    state[action.payload.y][xLoc].plotWeight -= 25
                }
            //update column weights
            } else if (action.payload.corpse.short ==='Col'){
                for (let yLoc=action.payload.y; !state[yLoc][action.payload.x].isWall; yLoc--){
                    state[yLoc][action.payload.x].plotWeight -= 25
                }
                for (let yLoc=action.payload.y+1; !state[yLoc][action.payload.x].isWall; yLoc++){
                    state[yLoc][action.payload.x].plotWeight -= 25
                }
            //update adjacent weights
            } else if (action.payload.corpse.short ==='Adj'){

                //update horizontal adjacent
                state[action.payload.y-1][action.payload.x].plotWeight = state[action.payload.y-1][action.payload.x].isWall?1:addDec(state[action.payload.y-1][action.payload.x].plotWeight,-40)
                state[action.payload.y+1][action.payload.x].plotWeight = state[action.payload.y+1][action.payload.x].isWall?1:addDec(state[action.payload.y+1][action.payload.x].plotWeight,-40)
                //update vertical adjacent
                state[action.payload.y][action.payload.x+1].plotWeight = state[action.payload.y][action.payload.x+1].isWall?1:addDec(state[action.payload.y][action.payload.x+1].plotWeight,-40)
                state[action.payload.y][action.payload.x-1].plotWeight = state[action.payload.y][action.payload.x-1].isWall?1:addDec(state[action.payload.y][action.payload.x-1].plotWeight,-40)
            }

            state[action.payload.y][action.payload.x].corpse = {}
        }
    }
})

export const { addGrave, removeGrave } = graveyardLayoutSlice.actions

export default graveyardLayoutSlice.reducer