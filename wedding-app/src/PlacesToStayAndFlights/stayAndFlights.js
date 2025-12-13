import './stayAndFlights.css';
import { useState } from 'react';
import generalMorgan from '../pictures/generalMorgan.jpg'
import BluffsCabin from '../pictures/cabin.jpg'
import qualityInn from '../pictures/QualityInn.jpg'
import HamptonInn from '../pictures/HamptonInn.jpg'

function StayAndFlights({ onClose }) {

    const [close, setClose] = useState(false);

    const handleSetClose = () => {

        onClose();
        setClose(!close);
    }
    return (
        // background
        <div className='stayAndFlightsBackground '>
            {/* overall content format */}
            <div className='form-content'>

                {/* exit button  and close function*/}
                <button className='stayAndFlights-exit-button' onClick={() => handleSetClose()}>X</button>

                {/* Flights */}
                <div className='flights'>
                    <h1>Flights</h1>

                    <p>When traveling to visit Greeneville, TN, the airports we usually fly into are listed below. Please note the time signifies distance away from Greeneville by car. We are looking into van rentals so we can assist in airport pick-up. Therefore, it would be amazing if our guests flew in together as groups during similar time frames. </p>

                    {/* list of plces */}
                    <div className='flights-list'>
                        <ul>
                            <li>Tri-Cities, TN - TRI (~52 min)</li>
                            <li>Asheville, NC - AVL (~1 hr 10 min)</li>
                            <li>Knoxville, TN - TYS (~1.5 hr)</li>
                            <li>Chattanooga, TN - CHA (~3 hr)</li>
                            <li>Charlotte, NC - CLT (~3 hr)</li>
                            <li>Nashville, TN - BNA (~4 hr)</li>
                        </ul>
                    </div>

                    <p> We usually book using<a href="https://www.google.com/travel/flights"> Google Flights </a>
                         which has a flight alert you can set to monitor drops in ticket prices. Currently, flight prices are a bit steep but should drop approximately 4-6 months prior to the wedding.           
                        If you know any good websites where you typically find affordable flights, please send them our way and we will add them to our website! </p>
                </div>

                {/* places to stay */}
                <div className='placesToStay'>
                    {/* Main header */}
                    <h1>Places to Stay</h1>
                    <p>If you are traveling as a family, we found that Airbnb and Vrbo are both great resources to find
                        large houses and appear to be more affordable for families!
                    </p>

                    {/* General morgal */}
                    <h5><a href="http://www.generalmorganinn.com/" target="_blank" rel="noreferrer">General Morgan</a></h5>
                    <p>Located in Downtown Greeneville and ~16 min away from the venue.
                        We tried to block rooms and inquired if we could receive a guest discount for 30+ rooms.
                        However, they were not willing to work with us. We found Expedia
                        had much more affordable prices than what they were offering.
                    </p>

                    <img
                        alt=''
                        className='imageWidth'
                        src={generalMorgan}
                    />

                    {/* Nolichuckey Bluffs */}
                    <h5><a href="https://www.tennessee-cabins.com/" target="_blank" rel="noreferrer">Nolichuckey Bluffs Cabins</a></h5>
                    <p>Located ~14 min away from the venue and from Downtown Greeneville.
                    </p>
                    <img
                        alt=''
                        className='imageWidth'
                        src={BluffsCabin}
                    />

                    {/* Hampton Inn */}
                    <h5><a href="https://www.hilton.com/en/hotels/grvtnhx-hampton-greeneville/?SEO_id=GMB-AMER-HX-GRVTNHX&y_source=1_MjA4MzY0Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D" target="_blank" rel="noreferrer">
                    Hampton Inn Greeneville
                    </a></h5>
                    <p>Located ~18 min away from the venue and 10 min away from Downtown Greeneville.
                    </p>
                    <img
                        alt=''
                        className='imageWidth'
                        src={HamptonInn}
                    />

                    {/* Hampton Inn */}
                    <h5><a href="https://www.choicehotels.com/tennessee/greeneville/quality-inn-hotels/tn673?mc=llgoxxpx" target="_blank" rel="noreferrer">
                    Quality Inn Greeneville - Tusculum
                    </a></h5>
                    <p>Located ~18 min away from the venue and 10 min away from Downtown Greeneville.
                    </p>
                    <img
                        alt=''
                        className='imageWidth'
                        src={qualityInn}
                    />

                </div>

            </div>
        </div> // back ground end
    )

}
export default StayAndFlights;