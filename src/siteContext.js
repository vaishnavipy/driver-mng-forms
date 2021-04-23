import React,{useState} from "react"

const siteContext = React.createContext()

function SiteContextProvider({children}){
    const [activeTab,setActiveTab] = useState("Driver")

    function handleActiveTab(tab){
        setActiveTab(tab)
    }



    return(
    <siteContext.Provider value={{activeTab,handleActiveTab}}>
        {children}
    </siteContext.Provider>)
}

export {siteContext,SiteContextProvider}