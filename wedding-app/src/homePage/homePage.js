import React, { useState } from 'react';
import './homePage.css';
import Popup from "../popUp/Popup";
import RSVPForm from '../rsvpForm/rsvpForm';

function HomePage() {
    const [showCrew, setShowCrew] = useState(false);
    const [showPlacesToStay, setPlacesToStay] = useState(false);
    const [showFood, setFood] = useState(false);
    const [showRsvp, setRsvp] = useState(false);


    const handleShowCrewPopUp = () => {
        setShowCrew(!showCrew);
    }

    const handlePlacesToStay = () => {
        setPlacesToStay(!showPlacesToStay);
    }

    const handleFood = () => {
        setFood(!showFood);
    }

    const handleshowRsvp = () => {
        setRsvp(!showRsvp);
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
                <button onClick={handlePlacesToStay}> Places to Stay</button>
                <br/>
                <button onClick={handleFood}> Food</button>
                <br/>
                <button onClick={handleshowRsvp}> RSVP</button>

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
                    <p>more to come cres</p>
                </Popup>
            )}

            {showPlacesToStay && (
                <Popup onClose={handlePlacesToStay}>
                    <p>more to come places to stay</p>
                </Popup>
            )}

            {showFood && (
                <Popup onClose={handleFood}>
                    <p>more to come food</p>
                </Popup>
            )}

            {showRsvp && (
                <Popup onClose={handleshowRsvp}>
                    <RSVPForm></RSVPForm>
                </Popup>
            )}


        </div>
    );
}
export default HomePage;