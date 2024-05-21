import React from "react";
import Scrollbutton from "../Components/Scrollbutton";
import ScrollAnimation from "../Components/ScrollAnimation ";
import Footer from "../Components/Footer";
import r1 from '../Images/r1.jpg';
import r2 from '../Images/r2.jpg';
import r3 from '../Images/r3.jpg';
import r4 from '../Images/r4.jpg';
import r5 from '../Images/r5.jpg';
import r6 from '../Images/r6.jpg';
import { useNavigate } from "react-router-dom";

const Rooms =()=>{

    const navigate = useNavigate();

    const handleClick=()=>{
        navigate("/Signup");
    };

  const { ref, isVisible } = ScrollAnimation();

    return(
        <div>
            <div className="rooms-section">
      <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
                <div className="vertical-rooms">
                </div>
                <h1>Our <span>Rooms</span><br/> Discover Luxury and African Charm in Our Unique Rooms at <span>Calabash Resort</span></h1>
      </div>

                <div className="rooms-container">
                    <div className="rooms">
                        <img className="r-img" src={r1} alt="room 1"/>
                        <h3>Savannah Serenity Suite</h3>
                        <p>Elevate Your Stay to new heights in our Deluxe Rooms <br/> -Where Luxury Meets unparalleled Comfort</p>
                    <button className="room-button" onClick={handleClick}>Book Now</button>
                    </div>
                    <div className="rooms">
                    <img className="r-img" src={r2} alt="room 1"/>
                        <h3>Baobab Bliss Retreat</h3>
                        <p>indulge in serenity and style in our Executive suites <br/> -Where every detail is Designed for youur Utmost relaxation</p>
                        <button className="room-button" onClick={handleClick}>Book Now</button>
                    
                    </div>
                    <div className="rooms">
                    <img className="r-img" src={r3} alt="room 1"/>
                        <h3>Afrique Elegance Deluxe</h3>
                        <p>Discover the epitome of sophisticcation in our Premiium Suites <br/> -Where opulence and modern amenities converge</p>
                        <button className="room-button" onClick={handleClick}>Book Now</button>
                   
                    </div>
                    <div className="rooms">
                    <img className="r-img" src={r4} alt="room 1"/>
                        <h3>Kalahari Tranquil Haven</h3>
                        <p>Experience true transquility in our Superior Rooms <br/> -Your Peaceful retreat in the heart of Calabash Resort</p>
                        <button className="room-button" onClick={handleClick}>Book Now</button>
                   
                    </div>
                    <div className="rooms">
                    <img className="r-img" src={r5} alt="room 1"/>
                        <h3>Zulu Opulent Oasis</h3>
                        <p>Unwind in Style In our Junior Suites <br/> - a harmonous blend of comfort, elegacnce, and contemporary design</p>
                        <button className="room-button" onClick={handleClick}>Book Now</button>
                  
                    </div>
                    <div className="rooms">
                    <img className="r-img" src={r6} alt="room 1"/>
                        <h3>Serenngeti Harmony Haven</h3>
                        <p>Luxiriate in Spacious accommodations with stunning views in our Panoramic Suites  <br/> a retreat like no other</p>
                        <button className="room-button" onClick={handleClick}>Book Now</button>
                  
                    </div>
                </div>
            </div>
            <Scrollbutton/>
        </div>
    )
}
export default Rooms;
