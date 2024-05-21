import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Styling.css'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import About from '../Pages/About';
import Scrollbutton from "../Components/Scrollbutton";
import Room from "./Services";
import Contact from "./Contact";
import Footer from "../Components/Footer";



const Index =()=>{

  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); // Replace "/signup" with the actual path to your Signup page
  };

  const handleLoginClick = () => {
    navigate("/login"); // Replace "/login" with the actual path to your Login page
  };


   const slides= [
    {
        id:1,
        heading1 : 'Welcome to Calabash Resort',
        description1: 'Your Luxury Escape Awaits! Explore our exquisite accommodations,',
        descriptiion2: 'exceptional dining, and stunning views in paradise.'

    },

    {
        id:2,
        heading1 : 'Experience Tranquility at Calabash Resort: ',
        description1 : 'Where every detail is tailored to perfection. ',
        description2: 'Book your dream getaway today and indulge in unparalleled hospitality.'

    }
]

    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds
        
      };

    return(
      <div id="root">
        <section className="banner_main">
        <Slider className="custom-slider" {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className={`carousel-item${slide.id}`}>
              <div className="f-slide">

              
              <div className="slide-content">
                
                <h2>{slide.heading1}</h2>
                <h2>{slide.heading2}</h2>

                <p>{slide.description1}</p>
                <p>{slide.description2}</p>
               

                <div className="gl-buttons">
        <Button className="g-button" variant="primary" onClick={handleSignupClick}>
          <span>Get Started</span>
        </Button>
        <Button className="l-button" variant="primary" onClick={handleLoginClick}>
          Login
        </Button>
      </div>
     
              </div>
                <section className="side-disp1">
                  <h1>Book Online</h1>
                  <ul>
                    <li>Lodging</li>
                    <li>Food</li>
                    <li>Catering Services</li>
                    <li>Table Reservations</li>
                    <li>Parking Space</li>
                  </ul>
                  <button>Book Now</button>
                </section>

                 

              
        </div>
            </div>
          ))}
        </Slider>
       
      </section>
      <Scrollbutton/>
            <About/>
            <Room/>
            <Contact/>
 
      </div>
      
    );
  };

export default Index;