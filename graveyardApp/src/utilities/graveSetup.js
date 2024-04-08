function graveSetup(){

    const graves= new Array(10).fill(null).map(()=>(
        new Array(19).fill(null).map(()=> {return {isWall:false}})
    ))

    const walledGraves = graves.map((graveRow,y) => {
        return graveRow.map((grave,x)=>{

            grave.x=x
            grave.y=y

            // top and bottom wall
            if(y===0 || y===9){
                grave.isWall=true
            }
            //left and right wall
            if(x===0 || x===18){
                grave.isWall=true
            }
            //first row walls
            if((y===1) && (x>3) && (x<16)){
                grave.isWall=true
            }
            //second row walls
            if((y===2) && (x>5) && (x<11)){
                grave.isWall=true
            }
            //third row walls
            const thirdRowFirst = ((x>0) && (x<4))
            const thirdRowSecond =((x>7) && (x<12))
            const thirdRowThird = ((x>12) && (x<15))
            const thirdRowFourth = ((x>16) && (x<18))
            if((y===3) && ( thirdRowFirst || thirdRowSecond || thirdRowThird || thirdRowFourth)){
                grave.isWall=true
            }

            //fourth row walls
            if((y===4) && (((x>7) && (x<12))||((x>12) && (x<15)))){
                grave.isWall=true
            }

            //fifth row walls
            if((y===5) && (((x>4)&&(x<6))||((x>8) && (x<12)))){
                grave.isWall=true
            }

            //sixth row walls
            if((y===6) && (((x>3)&&(x<7))||((x>13) && (x<16)))){
                grave.isWall=true
            }

            //seventh row walls
            if((y===7) && (((x>4)&&(x<7))||((x>13) && (x<16)))){
                grave.isWall=true
            }

            //eigth row walls
            if((y===8) && ((x>8)&&(x<11))){
                grave.isWall=true
            }
            return {...grave, corpse: {}}
        })
    });
    return walledGraves
}

export default graveSetup;