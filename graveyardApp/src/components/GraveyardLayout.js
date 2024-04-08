import React from "react";
import '../styles/components/_graveyardlayout.scss'
import Grave from "./Grave";
import { useState } from 'react';
import graveSetup from "../utilities/graveSetup";

const GraveyardLayout = (props) => {
    const [graves, setGraves] = useState(graveSetup());

    const setGrave = (newCorpse) => {
        setGraves(graves.map((graveRow, i) =>{
            if (i === newCorpse.y){
                return graveRow.map((grave,j) =>{
                    if (j===newCorpse.x){
                        console.log('NEW')
                        console.log({...grave, corpse: newCorpse})
                        return { ...grave, corpse: newCorpse.corpse}
                    } else return grave
                })
            }else return graveRow
        }))
    }

    return (
        <div className="graveyard__layout">
            {graves.map((graveRow, y) => {
                return graveRow.map((grave, x) => {
                    return ((y===0 || y===9) || (x===0 || x===18)) ?('') : (<Grave 
                        key={x+ ' ' + y} 
                        x={x} 
                        y={y} 
                        graves={graves}
                        grave={grave}
                        setGrave={setGrave}/>)
                })
            })}
        </div>
    );
    
}

export default GraveyardLayout;