import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Settings from "./Pages/Settings";







function App(){
  return(
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Settings />} />   
        </Routes> 
      </Router>
    </>
  )
}
export default App;