import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Festivals
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">"Festivals are the celebrations of culture and community, where the 
                       vibrancy of traditions converges in a symphony of colors, flavors, and melodies, binding people in shared joy."</span>
                       <span className="secondaryText"><i>~ Jawaharlal Nehru</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-festival-hero-img.jpg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero