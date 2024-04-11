import React from "react";
import '../styles/components/_corpselistlayout.scss'
import Corpse from "./Corpse";
import { useState } from 'react';
import corpses from '../utilities/corpses.json'

const CorpseListLayout = (props) => {
    const [corpseFilter, setCorpseFilter] = useState('');

    const updateCorpses = (event) => {
        event.preventDefault();
        setCorpseFilter(event.target.value);
    }

    return (
        <div  className="corpselist__layout">
            Corpse List
            <div>
                Filter
                <input onChange={(e)=>updateCorpses(e)}/>
            </div>
            {corpses.filter(corpse =>{
                return corpseFilter.length===0 || corpse.description.toLowerCase().includes(corpseFilter.toLowerCase())
            }).map(corpse => {
                return (<Corpse 
                    key={corpse.description} 
                    corpse={corpse} />)
            })}
        </div>
    );
}

export default CorpseListLayout;