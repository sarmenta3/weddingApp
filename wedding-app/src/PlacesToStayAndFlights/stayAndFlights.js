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

                    <p>When coming to visit Greeneville TN the airports we usually fly into are the following:</p>

                    {/* list of plces */}
                    <div className='flights-list'>
                        <ul>
                            <li>Tri-Cities TRI (~52min)</li>
                            <li>Asheville NC AVL(~1hr 10min)</li>
                            <li>Knoxville TYS (~1.5hr)</li>
                            <li>Chattanooga CHA (~3hr)</li>
                            <li>Charlott NC CLT (~3hr)</li>
                            <li>Nashville BNA (~4hr)</li>
                        </ul>
                    </div>

                    <p> We usually book using<a href="https://www.google.com/travel/flights"> Google Flights</a>
                         which has a flight alert you can set to monitor drops in ticket prices. Currently flights seem to be a little high
                        but should drop 4-6 months prior to the wedding. Keep you eyes out. If you know of any good websites to buy flights
                        from please send them our way and we can add them to our website! Thanks! </p>
                </div>

                {/* places to stay */}
                <div className='placesToStay'>
                    {/* Main header */}
                    <h1>Places to Stay</h1>
                    <p>If you are traveling as a family, we found that Airbnb and Vrbo are great places to find
                        a large house and seem to be a cheaper way to stay!
                    </p>

                    {/* General morgal */}
                    <h5><a href="http://www.generalmorganinn.com/" target="_blank" rel="noreferrer">General Morgan</a></h5>
                    <p>Located in Downtown Greeneville and ~16 min form the venue.
                        We tried to block rooms and see if we could get a guest discount.
                        However, they were not willing to work with us. We found Expedia
                        had cheaper prices than what they were offering.
                    </p>

                    <img
                        className='imageWidth'
                        src={generalMorgan}
                    />

                    {/* Nolichuckey Bluffs */}
                    <h5><a href="https://www.tennessee-cabins.com/" target="_blank" rel="noreferrer">Nolichuckey Bluffs Cabins</a></h5>
                    <p>Located ~14 min form the vinue and from Downtown Greeneville. I will be checking this place out in November and getting back!
                    </p>
                    <img
                        className='imageWidth'
                        src={BluffsCabin}
                    />

                    {/* Hampton Inn */}
                    <h5><a href="https://www.hilton.com/en/hotels/grvtnhx-hampton-greeneville/?SEO_id=GMB-AMER-HX-GRVTNHX&y_source=1_MjA4MzY0Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D" target="_blank" rel="noreferrer">
                    HAMPTON INN GREENEVILLE
                    </a></h5>
                    <p>Located ~18 min form the vinue and 10 minfrom Downtown Greeneville. I will be checking this place out in November and getting back!
                    </p>
                    <img
                        className='imageWidth'
                        src={HamptonInn}
                    />

                    {/* Hampton Inn */}
                    <h5><a href="https://www.choicehotels.com/tennessee/greeneville/quality-inn-hotels/tn673?mc=llgoxxpx" target="_blank" rel="noreferrer">
                    Quality Inn Greeneville - Tusculum
                    </a></h5>
                    <p>Located ~18 min form the vinue and 10 minfrom Downtown Greeneville. I will be checking this place out in November and getting back!
                    </p>
                    <img
                        className='imageWidth'
                        src={qualityInn}
                    />

                </div>

            </div>
        </div> // back ground end
    )

}
export default StayAndFlights;