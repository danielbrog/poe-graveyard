import React, { useEffect } from "react";
import '../styles/components/_modlist.scss'
import { useSelector } from 'react-redux'
import { useState } from "react";

const ModList = (props) => {
    const graves = useSelector((state) => state.graveyardLayout)
    const [list, setList] = useState({})
    
    useEffect(()=> {
        const tempList={}
        graves.map((graveRow, y) => {
            return graveRow.map((grave, x) => {

                const plotEffect = grave.corpse.scalable?grave.corpse.effect*grave.plotWeight:grave.corpse.effect
                const effect=tempList[grave.corpse.modifier]?tempList[grave.corpse.modifier].effect + parseInt(plotEffect):parseInt(plotEffect)

                tempList[grave.corpse.modifier] = {
                    count: tempList[grave.corpse.modifier]?tempList[grave.corpse.modifier].count+1:1,
                    scalable: grave.corpse.scalable,
                    effect: parseInt(effect),
                    description: grave.corpse.short,
                }
                return tempList[grave.corpse.modifier]
            })
        })

        setList(tempList)
    }, [graves])

    const Mod = (props) => {
        return(
            <div>
                {props.modInfo.scalable?props.modInfo.description+': '+props.modInfo.effect: props.modInfo.description +': ' + props.modInfo.count}<br />
            </div>
        )
    }


    return (
        <div className='mod__list'>
            <h2>Mod List</h2>
            {Object.keys(list).map(key=>{
                if(key==='undefined') return
                return (<Mod key={key} modInfo={list[key]} />)
            })}
        </div>
    )
}

export default ModList