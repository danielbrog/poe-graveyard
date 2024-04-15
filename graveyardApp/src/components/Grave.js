import React from 'react';
import '../styles/components/_grave.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addGrave } from '../reducers/graveyardLayoutSlice';

const Grave = (props) => {
    const graves = useSelector((state) => state.graveyardLayout)
    const dispatch = useDispatch()


    const handleClick = () => {
        console.log('grave: ')
        console.log(props.grave)
    }

    const corpseDropped = (event) => {
        event.preventDefault()
        dispatch(addGrave({
            ...props.grave,
            corpse: JSON.parse(event.dataTransfer.getData("corpse"))
        }))
    }

    const corpseDragOver = (event) => {
        event.preventDefault()
    }

    return (
        <div 
            onDrop={(event) => corpseDropped(event)} 
            onDragOver={(event) => corpseDragOver(event)}
            className={props.grave.isWall?'grave_wall':'grave'} 
            onClick = {handleClick} 
            iswall={props.grave.isWall ? 'true' : undefined}>
                <div className={props.grave.isWall ?'':'grave__plotlevel'}> 
                    Clvl: {props.grave.plotWeight}
                </div>
                {props.grave.corpse.scalable?(((props.grave.corpse.effect>0)?'+': '') + props.grave.corpse.effect * props.grave.plotWeight): props.grave.corpse.effect }<br/>
                {props.grave.corpse.modifier?props.grave.corpse.short:''}
        </div>
    );
}

export default Grave;