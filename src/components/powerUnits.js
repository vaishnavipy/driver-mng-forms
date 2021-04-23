import React, { Fragment } from "react"
import DropDownInfo from "./dropDownInfo"

function PowerUnits(){

    const powerUnitsTab =[
        {label :"Power Unit ID",inputType:"text"},
        {label :"Calendar ID",inputType:"text"},
        {label :"Effective Date",inputType:"date"},
        {label :"Expiration Date",inputType:"date"},
    ]

    const powerUnitsColumns = powerUnitsTab.map((tab,i) => {
        return(
        <div key={i} className="driver-info-div" style={i === powerUnitsTab.length-1 ?  {borderRight:"0px"}: {}}>
            <p className="labels"><span > * </span>{tab.label}</p>
            <input type={tab.inputType} />
        </div>)
    })

    return(
    <Fragment>
        <DropDownInfo name="Power Units">
        <div className="grid-col-4 drop-down-col">
            {powerUnitsColumns}
        </div>
        <hr className="drop-down-hr"/>
        
        </DropDownInfo>
        <DropDownInfo name="Reference Numbers">
        <div className="grid-col-4 drop-down-col">
            {powerUnitsColumns}
        </div>
        <hr className="drop-down-hr"/>
        
        </DropDownInfo>
    </Fragment>
    )
}

export default PowerUnits