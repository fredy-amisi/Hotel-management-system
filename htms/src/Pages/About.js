import React, { useEffect, useRef, useState } from "react";
import b2 from "../Images/b2.jpg";
import Scrollbutton from "../Components/Scrollbutton";
import ScrollAnimation from "../Components/ScrollAnimation ";
import '../Css/ScrollAnimation.css'
import Footer from "../Components/Footer";


const About = () => {

  const { ref, isVisible } = ScrollAnimation();



  useEffect(() => {
    let guestCount = 100;
    let roomCount = 50;
    let clientsCount = 150;
    let destinationsCount = 20;

    function updateCountsOnScroll() {
      if (window.scrollY > 300) {
        updateCount("guestCount", guestCount);
        updateCount("roomCount", roomCount);
        updateCount("clientsCount", clientsCount);
        updateCount("destinationsCount", destinationsCount);
      }
    }

    // Function to update count for a specific section
    function updateCount(elementId, count) {
      let element = document.getElementById(elementId);
      let currentCount = 0;
      let updateInterval = setInterval(function () {
        if (element) {
          element.textContent = currentCount;
          currentCount++;
          if (currentCount > count) {
            clearInterval(updateInterval);
            element.textContent = count;
          }
        }
      }, 10);
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", updateCountsOnScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateCountsOnScroll);
    };
  }, []);


  return (
    <div className="about">
      <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
      <div className="vertical-about"></div>
      <h3>About<span> Calabash Resort</span></h3>
      </div>
      <div className="all-containers">
        <div className="about-container1">
          <img className="a-image" src={b2} alt="" />
        </div>
        <div className="about-container2">
          <h4>Step into the Soul of <span>Calabash Hotel</span>: </h4>
        </div>
      </div>
      <div className="about-container3">
        <p><span>A Haven of Heritage and Hospitality.
             Immerse Yourself in the Rich Tapestry of 'Kienyeji' Cuisine, 
             Cherished from Generations Past. Experience Warmth, Flavor, 
             and Tradition Infused into Every Stay.</span></p>
        <button className="Learn-more-button">Learn more</button>
      </div>
      <div className="division">
        <div className="section">
          <h2>Guests</h2>
          <p id="guestCount">0</p>
        </div>
        <div className="section">
          <h2>Bookings</h2>
          <p id="roomCount">0</p>
        </div>
        <div className="section">
          <h2>Clients</h2>
          <p id="clientsCount">0</p>
        </div>
        <div className="section">
          <h2>Destinations</h2>
          <p id="destinationsCount">0</p>
        </div>
      </div>
      <Scrollbutton/>
    </div>
  );
}

export default About;
