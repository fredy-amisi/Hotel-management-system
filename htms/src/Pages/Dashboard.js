import React from "react";
import Scrollbutton from '../Components/Scrollbutton';
import "../Css/Dashboard.css"
import r1 from '../Images/r1.jpg';
import r2 from '../Images/r2.jpg';
import r3 from '../Images/r3.jpg';
import r4 from '../Images/r4.jpg';
import r5 from '../Images/r5.jpg';
import r6 from '../Images/r6.jpg';
import b1 from '../Images/b1.jpg';
import b2 from '../Images/b2.jpg';
import b3 from '../Images/b3.jpg';
import {Link} from "react-router-dom";



const Dashboard=()=>{
   // Get the username from the URL query string
   const searchParams = new URLSearchParams(window.location.search);
   const username = searchParams.get('username');

    return(
        <div>
            <div className="dashboard-section">
                <div className="vertical-dashboard">
                </div>
                <h1>BOOK OUR <span>PREMIUM</span> SERVICES</h1>
                <div className="d-profile">
                    {/* Display the dynamic username */}
                    <h2>Welcome {username}</h2>
                </div>
                <div className="dashboard-container">
                    <div className="dashboard">
                       <Link to="/Booking"><img className="dt" src={r1} alt="r1" /></Link>
                        
                    </div>
                    <div className="dashboard">
                     <Link to="/Booking">
                    <img className="dt" src={r2} alt="r2" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={r3} alt="r3" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                       <img className="dt" src={r4} alt="r4" />
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={r5} alt="r5" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={r6} alt="r6" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={b1} alt="b1" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={b2} alt="b2" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={b3} alt="b3" />
                    </Link>
                        
                    </div>
                </div>
            </div>
            <Scrollbutton/>
        </div>
    )
}

export default Dashboard;