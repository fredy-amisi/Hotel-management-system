import React from "react";
import Scrollbutton from "../Components/Scrollbutton";
import ScrollAnimation from "../Components/ScrollAnimation ";
import Footer from "../Components/Footer";

const Services =()=>{
  const { ref, isVisible } = ScrollAnimation();

    return(
        <div>
            <div className="services-section">
      <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
                <div className="vertical-services">
                </div>
                <h1>Experience <span>Elevated Hospitality:</span><br/> Our Range of Bespoke Services</h1>
      </div>

                <div className="services-container">
                    <div className="services">
                        <h3>Dining Experience</h3>
                        <p>Enjoy authentic 'Kienyeji' cuisine served in a variety of dining settings, including a signature restaurant, outdoor terrace, and room service</p>
                    </div>
                    <div className="services">
                        <h3>Event Spaces</h3>
                        <p>Host memorable events such as weddings, conferences, and banquets in versatile and elegantly appointed venues, supported by professional event planning services</p>
                    </div>
                    <div className="services">
                        <h3>Business Amenities</h3>
                        <p>Access business amenities including meeting rooms, high-speed internet, and audiovisual equipment for productive corporate gatherings.</p>
                    </div>
                    <div className="services">
                        <h3>24/7 Reception</h3>
                        <p>Benefit from round-the-clock reception services, ensuring assistance and support at any hour of the day or night.</p>
                    </div>
                    <div className="services">
                        <h3>Special Packages and Offers</h3>
                        <p>Take advantage of exclusive packages, discounts, and seasonal promotions designed to enhance your stay and provide exceptional value.</p>
                    </div>
                    <div className="services">
                        <h3>Recreational Activities</h3>
                        <p>Discover a range of recreational activities such as swimming pools, sports facilities, guided tours, and cultural experiences to enhance your visit.</p>
                    </div>
                    <div className="services">
                        <h3>Concierge Services</h3>
                        <p> Receive personalized assistance from a dedicated concierge team for arranging transportation, booking local excursions, and fulfilling any special requests.</p>
                    </div>
                    <div className="services">
                        <h3>Childcare Services</h3>
                        <p>Ensure a stress-free stay for families with childcare services, kid-friendly amenities, and supervised activities tailored for young guests.</p>
                    </div>
                    <div className="services">
                        <h3>Airport Transfers</h3>
                        <p>Arrange hassle-free transportation to and from the airport with reliable shuttle services or private transfers.</p>
                    </div>
                </div>
            </div>
            <Scrollbutton/>
        </div>
    )
}
export default Services;
