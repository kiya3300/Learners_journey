import './App.css'
import Navbar from './Component/Main/nav bar/Navbar';
import Sidebar from './Component/Main/side bar/Sidebar';
import Signup from "./Component/Login/Signup";
import {Routes, 
  Route
} from "react-router-dom";
import Userpro from './view/Userpro';
import Dash from './view/Dash';
import Reset from './Component/Login/Reset';
import Changepsd from './Component/Login/Changepsd';
import Verify from './Component/Login/Verify';
import {useLocation} from 'react-router-dom'
import { useRef, useState } from 'react';
import useOutsideAlerter from './Hook/useOutSideHandler';
import Repo from './view/Repo';
import Add from './Component/Learner Journey/Journey/Learn/Main/Add';
import Login from './Component/Login/Login';




function App() {
  const location = useLocation();
  console.log({location})
  const [showSidebar, setShowSidebar] = useState(true)
  const ref = useRef(null)
  return (
   
      
   
    <div className="App w-full flex  bg-slate-200">
        
    
        { (
        location.pathname !== "/signup" && 
        location.pathname !== '/login' && 
        location.pathname !== '/validation' && 
        location.pathname !== "/change" && 
        location.pathname !== "/reset" && 
        location.pathname !== "/user" && 
        location.pathname !== "/verify") && 
       

        <div ref={ref} 
          className={`md:w-[20%]  h-[100vh]  shadow top-0 ${showSidebar ? 
          'flex fixed md:sticky': 'hidden'}`} >
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>} 
      
      <div className={`w-full md:w-[90%]  h-[100vh] overflow-auto ${!showSidebar  && 'md:w-full'} ${ (
        location.pathname === "/signup" || 
        location.pathname === '/login' || 
        location.pathname === "/reset" || 
        location.pathname === "/change" || 
        location.pathname === "/validation" || 
        location.pathname === "/user" || 
        location.pathname === "/verify") &&  'md:w-full'}`}>
      
        
          { (
          location.pathname !== "/signup" && 
          location.pathname !== '/login' && 
          location.pathname !== '/validation' && 
          location.pathname !== "/reset"  && 
          location.pathname !== "/change"  && 
          location.pathname !== "/user"  && 
          location.pathname !== "/verify" ) &&  

          <div
           className="sticky top-0 border-b shadow-md  h-16 bg-white ">
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/> 
          </div>} 
         
      
          <Routes>
            <Route exact path='/login'  element={<Login />}/>
          </Routes>
          <Routes>
            <Route exact path='/signup'  element={<Signup />}/>
          </Routes>
          <Routes>
            <Route exact path='/reset'  element={<Reset />}/>
          </Routes> 
          <Routes>
            <Route exact path='/change'  element={<Changepsd />}/>
          </Routes> 
          <Routes>
            <Route exact path='/verify'  element={<Verify />}/>
          </Routes> 
          <Routes>
            <Route exact path='/'  element={<Dash />}/>
          </Routes> 
          <Routes>
            <Route exact path='/Dashboard'  element={<Dash />}/>
          </Routes>                                   
          <Routes>
            <Route exact path='/report'  element={<Repo />}/>
          </Routes>           
          <Routes>
            <Route exact path='/add'  element={<Add />}/>
          </Routes>                                          
          <Routes>
            <Route exact path='/users'  element={<Userpro />}/>
          </Routes>
   
      </div>
      </div>
 
        
    
  );
}

export default App;
