// import React ,{Component}from 'react';
// import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import NavbarComp from './components/NavbarComp';
import JumboComp from './components/JumboComp';
import Review from './components/Review';
import Services from './components/Services';
import WorkUs from './components/WorkUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
// import {createContext,useState} from 'react';
// import ReactSwitch from "react-switch";

// import { ThemeProvider, useTheme } from "../src/components/feature/ThemeContext";
// import { useContext } from "react";
// import { ThemeContext } from "./components/feature/ThemeContext";

import '../src/App.css';
// import ContactForm from './components/ContactForm';
// import Stack from 'react-bootstrap/Stack';

// const Stack = ({ children }) => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       {children}
//     </div>
//   );
// };

// export const ThemeContext= createContext();
function App() {
  // const [theme,setTheme]= useState("dark");

  // const toggleTheme=()=>{
  //   setTheme((curr =>(curr === "light"? "dark":"light")));
  // }
  return (
    
  //   <Router>
 
  //   </Router>
//  <ThemeProvider style={{
//   backgroundColor: theme === "light" ? "white" : "black",
// }}>
  
//  </ThemeProvider>


// id={theme}
< >

<NavbarComp/>  
{/* <div className="switch">
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
</div> */}
   {/* <Routes >
   <Route  path="/" element={} />
    <Route  path="/" elementt={} />
    <Route  path="/" elementt={} />
  </Routes> */}

 
<JumboComp/> 
<Review/>
<Services/>
<WorkUs/>
<ContactForm/>
<Footer/>
</>








// {/* <ThemeContext.Provider value={{ theme, toggleTheme }}>

// </ThemeContext.Provider>  */}

    
  );
}

export default App;


