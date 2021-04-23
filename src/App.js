
import './App.css';
import AccordionTabs from "./components/accordionTabs"
import MainForm from "./components/mainForm"
import { siteContext } from "./siteContext"
import {useContext} from "react"


function App() {
  const {activeTab} = useContext(siteContext)

  return (
    <div className="main-container">
      <AccordionTabs />

      {activeTab === "Driver" &&  <MainForm />}
    
    </div>
  );
}

export default App;
