import React from "react";
import '../styles/components/_corpse.scss'

const Corpse = (props) => {
    const onDrag = (event) => {
        event.preventDefault();
    }

    return (
        <div 
        className='corpse'
        draggable 
        onDrag={(event) => onDrag(event)}
        onDragStart={(event) => {
            return event.dataTransfer.setData("corpse",JSON.stringify(props.corpse))
        }}
        >
            {props.corpse.description}
        </div>
    );
}

export default Corpse;