import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Settings from "./Pages/Settings";
import Data from "./Components/Data";
import Navbar from "./Components/NavbarMobile";
import Table from "./Components/Table/Table";





function App(){
  return(
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Settings />} />  
          <Route path="/data" element={<Data />} />  
          <Route path="/nav" element={<Navbar />} />  
          <Route path="/tab" element={<Table />} />   
           
        </Routes> 
      </Router>
    </>
  )
}
export default App;