import React, { useState } from 'react';
import './homePage.css';

import RSVPForm from '../rsvpForm/rsvpForm';
import StayAndFlights from '../PlacesToStayAndFlights/stayAndFlights';
import TheCrew from '../theCrew/theCrew';
import Activities from '../Activities/activities';
import Popup from '../popUp/Popup';

function HomePage() {
    const homePagePw = 'EightEight26'
    const [showCrew, setShowCrew] = useState(false);
    const [showPlacesToStay, setPlacesToStay] = useState(false);
    const [showFood, setFood] = useState(false);
    const [showRsvp, setRsvp] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [isSelected, setIsSelected] = useState(false)

    const [isCreatGuestError, setIsCreatGuestError] = useState(false);

    const [isPw, setisPw] = useState(false);

    const handleSetPw = ( userPw ) => {
        if (userPw.target.value === homePagePw){
            setisPw(true)
        }
    }

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

    const handleIsCreatGuestError = (isError) => {
        setIsCreatGuestError(isError)
    }
    const closePopUp = () => {
        setIsCreatGuestError(false)
    }


    if(!isSelected) {
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
                <br/>
                <button className="button" onClick={handlePlacesToStay}> Flights and Places to Stay</button>
                <br/>
                <button className="button" onClick={handleShowActivites}> Activities </button>
                <br/>
                <button className="button" onClick={handleshowRsvp}> RSVP</button>

            </div>

            { isCreatGuestError && <div>
                    <Popup onClose={closePopUp}
                        showClose={true}
                    >
                        <h3>Yikes!!!</h3>
                        <p>Sorry, a error occured when trying to add you. Try again, or contact Jeki or Sam</p>
                    </Popup>
                </div>}

            {/* { !isPw && <div>
                    <Popup 
                        onClose={closePopUp}
                        showClose={false}
                        >
                         <label>
                            Enter Password:
                        </label>
                        <input
                            className='form-TextInput'
                            type="password"
                            onChange={(e) => handleSetPw(e)}
                        />
                    </Popup>
                </div>}     */}

        </div>
    );
    } else {
        return(
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
                 onClose = {handleShowActivites}
                 />
            )}

            {showRsvp && (
                <RSVPForm
                    onClose={handleshowRsvp}
                    isError = {handleIsCreatGuestError}
                />
            )}
        </div>
        )
    }
    
}
export default HomePage;