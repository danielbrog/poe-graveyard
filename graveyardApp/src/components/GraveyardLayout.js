import React from "react";
import '../styles/components/_graveyardlayout.scss'
import Grave from "./Grave";


const GraveyardLayout= (props) => {

    const createGraves= () => {
        const graves = [];

        for (let i=0;i<17;i++) {
            for (let j=0;j<8;j++) {
                const id= "grave "+i+ " " +j
                graves.push(<Grave key={id} />)
            }
        }
        return (graves)
    }


    return (
        <div className="graveyard__layout">
            {createGraves()}
        </div>
    );
}

export default GraveyardLayout;