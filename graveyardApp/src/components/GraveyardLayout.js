import React from "react";
import '../styles/components/_graveyardlayout.scss'
import Grave from "./Grave";
import { useSelector } from 'react-redux'

const GraveyardLayout = (props) => {
    const graves = useSelector((state) => state.graveyardLayout)

    return (
        <div className="graveyard__layout">
            {graves.map((graveRow, y) => {
                return graveRow.map((grave, x) => {
                    return ((y===0 || y===9) || (x===0 || x===18)) ?('') : (<Grave 
                        key={x+ ' ' + y} 
                        x={x} 
                        y={y} 
                        graves={graves}
                        grave={grave}/>)
                })
            })}
        </div>
    );
    
}

export default GraveyardLayout;