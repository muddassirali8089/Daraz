import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";
import Carosal from "./component/Carosal";
import Signin from "./component/Signin";
import Registration from "./component/Registration";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Catogry from "./component/Catogry";
import PrivateRoute from './component/PrivateRoute';
import ResendVerification from "./component/ResendVerification";

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';



function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
     

      <Routes> 

        <Route path= {"/"} element={  
      <div>   <Catogry/> <Carosal/> <Cards/> <Footer/> </div>  } />

        <Route path="/login" element={<Signin />} />
        <Route path="/Registration" element={<Registration />} />
       
        
      </Routes>
      
     
    </div>
  );
}

export default App;
