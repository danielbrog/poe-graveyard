import React from 'react';
import '../styles/components/_grave.scss'

const Grave = (props) => {


    const handleClick = () => {
        console.log('grave: ')
        console.log(props.grave)
    }

    const corpseDropped = (event) => {
        event.preventDefault()
        console.log('DROP:')
        const corpseData = event.dataTransfer.getData("corpse")
        console.log(corpseData)
        if (props.grave.isWall){
            console.log('cant place on wall')
            return
        }
        props.setGrave({
            ...props.grave,
            corpse: JSON.parse(corpseData)
        })
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
                {props.grave.corpse.modifier?props.grave.corpse.modifier:''}
        </div>
    );
}

export default Grave;