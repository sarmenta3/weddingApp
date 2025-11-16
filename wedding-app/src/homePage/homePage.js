import React, { useState } from 'react';
import './homePage.css';

import RSVPForm from '../rsvpForm/rsvpForm';
import StayAndFlights from '../PlacesToStayAndFlights/stayAndFlights';
import TheCrew from '../theCrew/theCrew';
import Activities from '../Activities/activities';


function HomePage() {
    const [showCrew, setShowCrew] = useState(false);
    const [showPlacesToStay, setPlacesToStay] = useState(false);
    const [showRsvp, setRsvp] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [isSelected, setIsSelected] = useState(false)

    // const [isCreatGuestError, setIsCreatGuestError] = useState(null);


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

    // const handleIsCreatGuestError = (isError) => {
    //     setIsCreatGuestError(isError)
    // }
    // const closePopUp = () => {
    //     setIsCreatGuestError(null)
    // }

    if (!isSelected) {
        return (
            <div className="BackGround">

                <div className="intro">
                    <h3>Thank you for your love and support! We cannot wait to celebrate with you all in the same town where we got engaged!</h3>
                    <h3>Date: August 8, 2026</h3>
                    <h3>Venue: <a href="https://johnstonhomeplace.com/" target="_blank" rel="noreferrer">
                        Johnston Home Place
                    </a></h3>
                    <h3>Address: <a>240 Joe Johnston Ln, Greeneville, TN 37743</a></h3>
                </div>
                <div className="ButtonInto">
                    <button className="button" onClick={handleShowCrewPopUp}> Meet The Crew</button>
                    <br />
                    <button className="button" onClick={handlePlacesToStay}> Flights and Places to Stay</button>
                    <br />
                    <button className="button" onClick={handleShowActivites}> Activities </button>
                    <br />
                    <button className="button" onClick={handleshowRsvp}> RSVP</button>

                </div>

                {/* {isCreatGuestError === false && <div>
                    <Popup onClose={closePopUp}
                        showClose={true}
                    >
                        <h3>Awesome!!!</h3>
                        <p>RSVP has been Sent! Can't wait to see Y'all</p>
                    </Popup>
                </div>}

                {isCreatGuestError && <div>
                    <Popup onClose={closePopUp}
                        showClose={true}
                    >
                        <h3>Yikes!!!</h3>
                        <p>Sorry, a error occured when trying to add you. Try again, or contact Jeki or Sam</p>
                    </Popup>
                </div>} */}



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
            </div>
        )
    }

}
export default HomePage;