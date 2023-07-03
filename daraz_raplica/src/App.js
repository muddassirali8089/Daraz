import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";

import Carosal from "./component/Carosal";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from "./component/Signin";
import Registration from "./component/Registration";

function App() {
  return (
    <div className="App">


   <Navbar/>
   <Navbar2/>
   <Routes>

   <Route path="/" element={< Carosal/>}></Route>
   <Route path="/Signin" element={< Signin/>}></Route>
   <Route path="/Registration" element={< Registration/>}></Route>
  
  </Routes>
  
    

 </div>
  );
}

export default App;
