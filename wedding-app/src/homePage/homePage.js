import React, { useState } from 'react';
import './homePage.css';

import RSVPForm from '../rsvpForm/rsvpForm';
import StayAndFlights from '../PlacesToStayAndFlights/stayAndFlights';
import TheCrew from '../theCrew/theCrew';
import Activities from '../Activities/activities';
import AttireRegistry from '../AttireRegistry/AttireRegistry'


function HomePage() {
    const [showCrew, setShowCrew] = useState(false);
    const [showPlacesToStay, setPlacesToStay] = useState(false);
    const [showRsvp, setRsvp] = useState(false);
    const [showAttire, setAttire] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleShowCrewPopUp = () => {
        setIsSelected(!isSelected);
        setShowCrew(!showCrew);
    }

    const handlePlacesToStay = () => {
        setIsSelected(!isSelected);
        setPlacesToStay(!showPlacesToStay);
    }

    const handleshowRsvp = () => {
        setIsSelected(!isSelected);
        setRsvp(!showRsvp);
    }

    const handleShowActivites = () => {
        setIsSelected(!isSelected);
        setShowActivities(!showActivities);
    }

    const handleAttire = () => {
        setIsSelected(!isSelected);
        setAttire(!isSelected)
    }

    if (!isSelected) {
        return (
            <div className="BackGround">

                <div className="intro">
                    <h3>Thank you for your love and support! We cannot wait to celebrate with you all in the same town where we got engaged! Please RSVP by no later than April 1, 2026 (no this is not a joke). </h3>
                    <h3>Date: August 8, 2026</h3>
                    <h3>Venue: <a href="https://johnstonhomeplace.com/wp-content/uploads/Homeplace-Wedding-Venue-Video-Tour.mp4" target="_blank" rel="noreferrer">
                        Johnston Home Place
                    </a></h3>
                    <h3>Address: 240 Joe Johnston Ln, Greeneville, TN 37743</h3>
                </div>
                <div className="ButtonInto">
                    <button className="button" onClick={handleShowCrewPopUp}> Meet The Crew</button>
                    <br />
                    <button className="button" onClick={handlePlacesToStay}> Flights and Places to Stay</button>
                    <br />
                    <button className="button" onClick={handleShowActivites}> Activities </button>
                    <br />
                    <button className="button" onClick={handleshowRsvp}> RSVP</button>
                    <br/>
                    <button className="button" onClick={handleAttire}> Attire/Registry</button>

                </div>

            </div>
        );

    } else {
        return (
            <div>
                {showCrew && (

                    <TheCrew
                        onClose={handleShowCrewPopUp}
                    />
                )}

                {showPlacesToStay && (
                    <StayAndFlights
                        onClose={handlePlacesToStay}
                    />
                )}

                {showActivities && (
                    <Activities
                        onClose={handleShowActivites}
                    />
                )}

                {showRsvp && (
                    <RSVPForm
                        onClose={handleshowRsvp}
                    />
                )}

                 {showAttire && (
                    <AttireRegistry
                        onClose={handleAttire}
                    />
                )}
            </div>
        )
    }

}
export default HomePage;