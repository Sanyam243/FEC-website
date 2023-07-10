
import './App.css';
import './home.css';


import {Navbar} from "./MyComponents/Navbar";
import {Home} from "./MyComponents/Home";
import { useEffect } from 'react';


 
function App() {
  useEffect(() => {
   const script=document.createElement("script");
   script.src="landingpage.js";
   document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  



  return (
   
   <>
   
    <Navbar/>
    <Home/>
 
   </>
  );
}

export default App;
