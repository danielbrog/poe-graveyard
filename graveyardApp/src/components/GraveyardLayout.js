import React from "react";
import '../styles/components/_graveyardlayout.scss'

const GraveyardLayout= (props) => {
    return (
        <div className="graveyard__layout">
            <div className="graveyard__graveSlot"></div>
            <div className="graveyard__graveSlot"></div>
            <div className="graveyard__graveSlot"></div>
            <div className="graveyard__graveSlot"></div>
        </div>
    );
}

export default GraveyardLayout;