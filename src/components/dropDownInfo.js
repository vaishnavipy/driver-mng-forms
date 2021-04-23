import React, { useState } from "react"
import {AiOutlinePlusSquare,AiOutlineMinusSquare} from "react-icons/ai"


function DropDownInfo({children,name}){

    const [showInfo,setShowInfo] = useState(true)

    function handleShowInfo(){
        setShowInfo(prevState => !prevState)
    }

    return(
    <div key={name}>
        <div className="drop-down-tab">
            <span className="drop-down-icon" onClick={handleShowInfo}>{showInfo ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}</span>
            <p>{name}</p>
        </div>
       
        {showInfo && children}
        
    </div>)
}

export default DropDownInfo