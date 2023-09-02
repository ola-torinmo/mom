// import React ,{Component}from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Home from './components/Assets/Home/Home';
import Servicepg from './components/Assets/Services/Servicepg';

import '../src/App.css';
import About from './components/Assets/About/About';


function App() {
  
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Servicepg' element={<Servicepg/>} />
        </Routes>
      </Router>
    
  
    </div>
  )
}

export default App;


