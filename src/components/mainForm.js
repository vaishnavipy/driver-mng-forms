import React, { useContext } from "react"
import DriverInfo from "./driverInfo"
import WorkProfile from "./workProfile"
import PowerUnits from "./powerUnits"


function MainForm(){

    return(
    <div className="main-form">
        
        <DriverInfo />
        <WorkProfile />
        <PowerUnits />
       
    </div>)

    
}

export default MainForm