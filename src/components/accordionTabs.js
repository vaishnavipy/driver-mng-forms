import React, { useContext, useState } from "react"
import { siteContext } from "../siteContext"

function AccordionTabs(){
  
    const {activeTab,handleActiveTab}  = useContext(siteContext)

    return(
    <div>
        <div className="accordion-tabs">
            <p className={activeTab === "Driver" ? "active tab" :"tab"}  onClick={()=>{handleActiveTab("Driver")}}>Driver</p>
            <p className={activeTab === "Licenses" ? "active tab" :"tab"} onClick={()=>{handleActiveTab("Licenses")}}>Licenses</p>
            <p className={activeTab === "SplServices" ? "active tab" :"tab"} onClick={()=>{handleActiveTab("SplServices")}}>Special Services</p>
            <p className={activeTab === "Remarks" ? "active tab" :"tab"} onClick={()=>{handleActiveTab("Remarks")}}>Remarks</p>
            <p className={activeTab === "InvParties" ? "active tab" :"tab"} onClick={()=>{handleActiveTab("InvParties")}}>Involved Parties</p>
            <p className={activeTab === "Tracking" ? "active tab" :"tab"} onClick={()=>{handleActiveTab("Tracking")}}>Tracking</p>
        </div>
        <hr  className="hr"/>
    </div>)
}

export default AccordionTabs