import React from 'react'
import bgimage from './Frame 159.jpg';

export const Home = () => {
  return (
    <>
    <main>
    <div className="bgimage"> <img src={bgimage} alt="" /></div>
        <div className="largetext">
            Finance & Economics
        </div>
        <div className="largetext2"> Finance & Economics</div>
      
          <div className="buttons">
            
              <button type="button" className=" btn but1" id="but1">JOIN US </button>
            
           <button className=" btn but2" type="submit" id="but2">EXPLORE</button>
          
          
          <div className="buttontxt">
            FEC functions as a platform for students to come together and learn the intriguing and fun world of finance.
          </div>
          
        </div>
        

    </main>
    
    <div className="motoblock">
      <div className="moto">OUR MOTTO:</div>
    </div>
    <div className="mototxt">
      Be an asset Not a liability
    </div>

    </>
  );
}
export default Home;