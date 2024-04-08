import React from "react";
import '../styles/components/_corpselistlayout.scss'
import corpses from '../utilities/corpses.json'
import Corpse from "./Corpse";

const CorpseListLayout = (props) => {

    return (
        <div  className="corpselist__layout">
            Corpse List Title
            {corpses.map(corpse => {
                return (<Corpse 
                    key={corpse.description} 
                    corpse={corpse} />)
            })}
        </div>
    );

}

export default CorpseListLayout;