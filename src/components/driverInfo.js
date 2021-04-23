import React from "react"

function DriverInfo(){
    return(
    <div className="driver-info">
        <div>
            <div className="driver-info-div">
                <p className="labels"><span className="mandatory"> * </span>Driver ID</p>
                <p>D1</p>
            </div>

            <div className="driver-info-div">
                <p className="labels">Date Of Birth</p>
                <input type="date"  />
            </div>

            <div className="driver-info-div">
                <p className="labels">Default Home Location ID</p>
                <input type="text"/>
            </div>

            <div className="driver-info-div">
                <p className="labels">Resource Type</p>
                <select>
                    <option value="employee">Employee</option>
                </select>
            </div>

            <div className="driver-info-div">
                <p className="labels">Rate Distance ID</p>
                <input type="text"/>
            </div>
        </div>
        <div>
            <div className="driver-info-div">
                <p className="labels">Domain Name</p>
                <p>SATRAJ</p>
            </div>

            <div className="driver-info-div">
                <p className="labels">Adjusted Hire Date</p>
                <input type="date"  />
            </div>

            <div className="driver-info-div">
                <p className="labels">Work Region ID</p>
                <input type="text"/>
            </div>

            <div className="driver-info-div">
                <p className="labels">Use HOS History</p>
                <input type="checkbox" className="checkbox" style={{background:"red"}}/>
            </div>

            <div className="driver-info-div">
                <p className="labels">End Date</p>
                <input type="date"/>
            </div>
        </div>
        <div>
            <div className="driver-info-div">
                <p className="labels">First Name</p>
                <input type="text"/>
            </div>

            <div className="driver-info-div">
                <p className="labels">Active</p>
                <input type="checkbox" className="checkbox" />
            </div>

            <div className="driver-info-div">
                <p className="labels">Contact ID</p>
                <input type="text"/>
            </div>

            <div className="driver-info-div">
                <p className="labels">Driver Configuration ID</p>
                <input type="text"/>
            </div>

           
        </div>
        <div>
            <div className="driver-info-div">
                <p className="labels">Last Name</p>
                <input type="text"/>
            </div>

            <div className="driver-info-div">
                <button>Status</button>
            </div>

            <div className="driver-info-div">
                <p className="labels"><span className="mandatory"> * </span>Driver Type ID</p>
                <input type="text"/>
            </div>

            <div className="driver-info-div">
                <p className="labels">Rate Offering ID</p>
                <input type="text"/>
            </div>

        </div>
    </div>)
}

export default DriverInfo