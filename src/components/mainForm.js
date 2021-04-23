import React, { useContext } from "react"

import DriverInfo from "./driverInfo"
import DropDownInfo from "./dropDownInfo"

function MainForm(){

    const workProfileTabs = [
        {label :"Home Location ID",inputType:"text"},
        {label :"Activity Calendar",inputType:"text"},
        {label :"Effective Date",inputType:"date"},
        {label :"Expiration Date",inputType:"date"},
        {label :"Save",inputType:"button"},
    ]

    const powerUnitsTab =[
        {label :"Power Unit ID",inputType:"text"},
        {label :"Calendar ID",inputType:"text"},
        {label :"Effective Date",inputType:"date"},
        {label :"Expiration Date",inputType:"date"},
    ]

    const workProfileColumns = workProfileTabs.map((tab,i) => {
        return( 
        <div className="driver-info-div" key={i}  style={i === workProfileTabs.length-1 ?  {borderRight:"0px"}: {}}>
            {["text","date"].includes(tab.inputType) ? 
            (<>
            <p className="labels"><span > * </span>{tab.label}</p>
             <input type={tab.inputType} />
             </>) : 
             (<button>{tab.label}</button>)
             } 
        </div>)
    })

    const powerUnitsColumns = powerUnitsTab.map((tab,i) => {
        return(
        <div key={i} className="driver-info-div" style={i === powerUnitsTab.length-1 ?  {borderRight:"0px"}: {}}>
            <p className="labels"><span > * </span>{tab.label}</p>
            <input type={tab.inputType} />
        </div>)
    })
   
    return(
    <div className="main-form">
        <DriverInfo />

        <DropDownInfo name="Work Profile">
           
            <div className="drop-down-col-5 drop-down-col">
                {workProfileColumns}
            </div>
            <hr className="drop-down-hr"/>
            
        </DropDownInfo>

        <DropDownInfo name="Power Units">
            <div className="drop-down-col-4 drop-down-col">
                {powerUnitsColumns}
            </div>
            <hr className="drop-down-hr"/>
            
        </DropDownInfo>
        <DropDownInfo name="Reference Numbers">
            <div className="drop-down-col-4 drop-down-col">
                {powerUnitsColumns}
            </div>
            <hr className="drop-down-hr"/>
            
        </DropDownInfo>
    </div>)

    
}

export default MainForm