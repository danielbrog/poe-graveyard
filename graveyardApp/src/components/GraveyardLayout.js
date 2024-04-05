import React from "react";
import '../styles/components/_graveyardlayout.scss'
import Grave from "./Grave";
import { useState } from 'react';
import graveSetup from "../utilities/graveSetup";

const GraveyardLayout= (props) => {
    const [graves, setGraves] = useState(graveSetup());

    return (
        <div className="graveyard__layout">
            {graves.map((graveRow, y) => {
                return graveRow.map((grave, x) => (
                    <Grave 
                    key={x+ ' ' + y} 
                    x={x} 
                    y={y} 
                    graves={graves}
                    grave={grave}
                    setGraves={setGraves}/>
                ))
            })}
        </div>
    );
    
}

export default GraveyardLayout;