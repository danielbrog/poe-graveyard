import React from "react";
import '../styles/components/_grave.scss'

const Grave= (props) => {

    const handleClick = () => {
        console.log('X: ' + props.x)
        console.log('Y: ' + props.y)
        console.log('isWall: ' + props.grave.isWall)
    }

    return (
        <div className={props.grave.isWall?'grave_wall':'grave'} onClick = {handleClick} iswall={props.grave.isWall}>
        </div>
    );
}

export default Grave;