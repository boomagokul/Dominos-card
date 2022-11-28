import React from "react";
import "./App.css";
import Navbar from "./JspidersApp/Navbar";
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import LandingPAge from "./JspidersApp/LandingPAge";
import Contact from "./JspidersApp/Contact";
import Admin from "./JspidersApp/Admin";
import StudentProf from "./JspidersApp/StudentProf";
// import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
function App() {
  
    return (
      <React.Fragment>
        <BrowserRouter>
        <Navbar/>
          
          <Routes>
          <Route path="/" element={<LandingPAge/>}/>
              <Route path="/cont" element={<Contact/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/stu" element={<StudentProf/>}/>
          </Routes>
          </BrowserRouter>

      </React.Fragment>
    )
  
  }
  
  export default App;