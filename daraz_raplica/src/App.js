import React from "react";
import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";
import Carosal from "./component/Carosal";
import Signin from "./component/Signin";
import Registration from "./component/Registration";
import Cards from "./component/Cards";
import Footer from "./component/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  function Home() {

    return(
      <div>  <Carosal/> <Cards /> <Footer /> </div>
    )
    
  }


  
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />

      <Routes>
        
        
        
        <Route path= "/:slug" element={ <Home/>}/>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Registration" element={<Registration />} />
        
      </Routes>
     
    </div>
  );
}

export default App;
