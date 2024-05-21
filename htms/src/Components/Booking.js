import React from "react";
import axios from "axios";
import { useState } from "react";
import Scrollbutton from '../Components/Scrollbutton';
import "../Css/Booking.css"



const Booking=()=>{

    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const [inputs, setInputs] =useState({})


    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const { data } = await axios.post('http://localhost:80/api_call/booker/save', inputs);


      
          // Alert the user about successful insertion (assuming data indicates success)
          alert("Booking successful!");
      
          // Redirect to the login page
          window.location.href = "/Dashboard";
        } catch (error) {
          // Handle any errors that occur during the API call
          console.error(error);
          alert("Error While: " + error.message);
        }
      };
    return(
        <>
        <div>
        <div className="Booking-container">
        <form onSubmit={handleSubmit}> 
        <h2>Book Now</h2>
            <div className="overral-divs">
            <div className="div1">
        <div>
                <input  
                type="text"  
                name="name"   
                onChange={handleChange}
                placeholder="Write Your Full Name" 
                required/>


                <input  
                type="email"  
                name="email"  
                onChange={handleChange}
                placeholder="Write Your email here" 
                required/>

            </div>
            <div>
                <label htmlFor="date-in">
                    Date in:
                <input  
                type="date"  
                name="date-in"  
                onChange={handleChange}
                placeholder=" Date and Time for Pickup" 
                required/>
                
                </label>
            </div>
           
            </div>

            <div className="div2">
            <div>
                <select className="select"
                 type="text"  
                 name="alone-partner"  
                 onChange={handleChange}
                 required>
                    <option value="">State whether Alone OR with a partner</option>
                    <option value="alone">Alone</option>
                    <option value="with-partner">With a partner</option>

                </select>
            </div>
            <div>
                <select className="select"
                name="PaymentInformation"  
                onChange={handleChange}
                required
                >
                <option value="">Select Your Payment Method</option>
                <option value="Mpesa">Mpesa</option>
                <option value="check">check</option>
                <option value="Cash">Cash</option>

                    </select>  
                

            </div>
            <div>
                <label htmlFor="date-out">
                    Date Out:
                <input  
                type="date"  
                name="date-out"  
                onChange={handleChange}
                placeholder=" Date and Time for Pickup" 
                required/>
                
                </label>
            </div>
        
            
            </div>
            </div>
            <a href="<Login/>">
            <div className="div">
                <input type="submit" name="submit" value="Submit"  />

            </div>
            </a>
            
        </form>
        </div>
        <Scrollbutton/>
        </div>
        </>
    )
}
export default Booking;