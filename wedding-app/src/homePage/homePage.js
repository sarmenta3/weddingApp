import React, { useState } from 'react';
import './homePage.css';
import Popup from "../popUp/Popup";

function HomePage() {
    const [showCrew, setShowCrew] = useState(false);


    const handleShowCrewPopUp = () => {
        setShowCrew(!showCrew);
    }


    return (
        <div className="BackGround">

            <div className="intro">
                <h3>Thank you for your love and support! We hope to see y'all there!!</h3>
                <h3>Date: Eight Eight Twenty Twenty Six</h3>
                <h3>Location: <a href="https://johnstonhomeplace.com/" target="_blank" rel="noreferrer">
                    240 Joe Johnston Ln, Greeneville, TN 37743
                </a></h3>
            </div>
            <div className="intro">
                <button onClick={handleShowCrewPopUp}> Meet The Crew</button>
                <br/>
                <button onClick={handleShowCrewPopUp}> Places to Stay</button>
                <br/>
                <button onClick={handleShowCrewPopUp}> Food</button>
                <br/>
                <button onClick={handleShowCrewPopUp}> RSVP</button>
                
            </div>

            {/* <div className="intro">
                <h3>Places to stay:</h3>
            </div>

            <div className="intro">
                <h3>RSVP</h3>
            </div>

            <div className="intro">
                <h3>Food</h3>
            </div> */}

            {showCrew && (
                <Popup onClose={handleShowCrewPopUp}>
                    <h2>Welcome to the Popup!</h2>
                    <p>This is some content inside the popup.</p>
                </Popup>
            )}


        </div>
    );
}
export default HomePage;