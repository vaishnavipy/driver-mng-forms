import React, { useState } from "react"
import DropDownInfo from "./dropDownInfo"
import {GrEdit} from "react-icons/gr"
import {RiDeleteBin5Line} from "react-icons/ri"

function WorkProfile(){

    const [input,setInput] = useState({homeLocation:"",activityCalendar:"",effectiveDate:"",expirationDate:""})

    const TODAYS_DATE = new Date();

    TODAYS_DATE.setDate(TODAYS_DATE.getDate()+10)

    const [workProfileData,setWorkProfileData] = useState([{homeLocation:"Mumbai TL",activityCalendar:"Mon-Fri",effectiveDate:new Date().toString(),expirationDate:TODAYS_DATE.toString()}])

    const workProfileTabs = [
        {label :"Home Location ID",inputType:"text",name:"homeLocation"},
        {label :"Activity Calendar",inputType:"text", name:"activityCalendar"},
        {label :"Effective Date",inputType:"date",name:"effectiveDate"},
        {label :"Expiration Date",inputType:"date",name:"expirationDate"},
        {label :"Save",inputType:"button"},
    ]



    const workProfileColumns = workProfileTabs.map((tab,i) => {
        return( 
        <div className="driver-info-div" key={i}  style={i === workProfileTabs.length-1 ?  {borderRight:"0px"}: {}}>
            {["text","date"].includes(tab.inputType) ? 
            (<>
            <p className="labels"><span > * </span>{tab.label}</p>
             <input type={tab.inputType} name={tab.name} value={input[tab.name]} onChange={handleChange}/>
             </>) : 
             (<button onClick={handleSaveData}>{tab.label}</button>)
             } 
        </div>)
    })


    function handleChange(e){
        const {name,value} = e.target;
        setInput(prevState => ({...prevState,[name]:value}) )
    }

    function handleSaveData(){
        setWorkProfileData(prevData => [...prevData,input])
        setInput({homeLocation:"",activityCalendar:"",effectiveDate:"",expirationDate:""})
    }

    function handleEdit(id){
        
    }

    function handleDelete(id){
        setWorkProfileData(prevData => prevData.filter((data,i) => i !== id))
    }

    const workProfileDataRows = workProfileData.map((data,i) => {
        if(data.homeLocation){
        return(
        <div key={i} className="grid-col-5 drop-down-col driver-data" >
            <div>{data.homeLocation}</div>
            <div>{data.activityCalendar}</div>
            <div>{data.effectiveDate}</div>
            <div>{data.expirationDate}</div>
            <div style={{borderRight:"0px"}}> <span onClick={()=>{handleEdit(i)}} className="edit-icons"><GrEdit /> </span> <span onClick={()=>{handleDelete(i)}} className="edit-icons"><RiDeleteBin5Line /></span></div>
        </div>)
        }
    })


   
    return(
    <DropDownInfo name="Work Profile">
           
        <div className="grid-col-5 drop-down-col">
            {workProfileColumns}
        </div>

        <div>
            {workProfileDataRows}
        </div>
        <hr className="drop-down-hr"/>
        
    </DropDownInfo>
    )
}

export default WorkProfile