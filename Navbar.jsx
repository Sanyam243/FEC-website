import React from 'react'
import logo from './feclogo1.jpg'




export const Navbar = () => {
  return (
    <>

    <nav>
    
   
    
      <div className="logo"><div className="feclogo"></div>
      
        <div className="fec">Finance Club IIT Guwahati</div>
        
      </div>
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
    
    <ul className="nav-links">
        
      <li className="nav-item" id="fectxt">
        <a className="nav-link" href="#">
<img src={logo} alt=""/>
         </a> Finance Club IIT Guwahati
      </li>
     
      <li className="nav-item" >
        <a className="nav-link disabled" href="#">EVENTS</a>
      </li>

      <li className="nav-item" >
        <a className="nav-link disabled" href="#">TEAMS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">COURSES</a>

      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">BLOGS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">RESOURCES</a>
      </li>
      <li className="nav-item" >
        <a className="nav-link disabled" href="#">CONTACT US</a>
      </li>
      <li className="nav-item" >
        <a className="nav-link disabled" href="#">ALUMINI CORNER</a>
      </li>
    
   
    </ul>
</nav>
</>
  );
}
export default Navbar;