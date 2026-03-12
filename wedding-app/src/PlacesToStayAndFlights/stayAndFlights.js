import './stayAndFlights.css';
import { useState } from 'react';
import generalMorgan from '../pictures/generalMorgan.jpg'
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

                    <p>       
                        When traveling to visit Greeneville, TN, the airports we usually fly into are listed below. Please note the time signifies distance away from Greeneville by car. 
                        We are looking into van rentals so we can assist in airport pick-up. Therefore, it would be amazing if our guests flew in together as groups during similar time frames. 
                    </p>

                    <ol>
                       <li>   
                        When traveling to Greeneville we usually fly into Knoxville, TN. It's usually the cheapest prices for how close the airport is to Greeneville. Check the Activities section 
                        and Travel Tennessee for some fun ideas.
                        </li>
                        
                        <li>
                        Next airport you would want to check out is Asheville, NC. They would be next for cheapest with least amount of distance to Greeneville. 
                        </li>

                        <li>
                        Lastly, if you want to fly close but pay a little more check out Tri-Cities, TN. Keep in mind, they have awesome flash price drops!
                        </li>
                    </ol>
     

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
                        If you know any good websites where you typically find affordable flights. </p>
                </div>

                {/* places to stay */}
                <div className='placesToStay'>
                    {/* Main header */}
                    <h1>Places to Stay</h1>

                    <p>If you are traveling as a family, we found that Airbnb and Vrbo are both great resources to find
                        large houses and appear to be more affordable for families!
                    </p>


                    {/* Hampton Inn */}
                    <h5><a href="https://www.hilton.com/en/hotels/grvtnhx-hampton-greeneville/?SEO_id=GMB-AMER-HX-GRVTNHX&y_source=1_MjA4MzY0Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D" target="_blank" rel="noreferrer">
                    Hampton Inn Greeneville
                    </a></h5>
                     <p>
                        Sam personally checked this hotel out and they were nice enough to let him view rooms. It was very nice and friendly customer service. 
                        They gave us a wedding discount, if you tell them you are there for Sam and Jelena's wedding
                        they said they will give a discount of $189 for basic rooms.
                    </p>
                    <p>Located ~18 min away from the venue and 10 min away from Downtown Greeneville.
                    </p>
                    <img
                        alt=''
                        className='imageWidth'
                        src={HamptonInn}
                    />

                    {/*  Quality Inn */}
                    <h5><a href="https://www.choicehotels.com/tennessee/greeneville/quality-inn-hotels/tn673?mc=llgoxxpx" target="_blank" rel="noreferrer">
                    Quality Inn Greeneville - Tusculum
                    </a></h5>
                    <p>
                       Sam personally checked this hotel too and they were nice enough to let him view the rooms. 
                       It was nice, just not as nice as Hapton Inn. However, they did not provide us with a wedding discount.
                    </p>
                    <p>Located ~18 min away from the venue and 10 min away from Downtown Greeneville.
                    </p>
                    <img
                        alt=''
                        className='imageWidth'
                        src={qualityInn}
                    />

                    
                    {/* General morgal */}
                    <h5><a href="http://www.generalmorganinn.com/" target="_blank" rel="noreferrer">General Morgan</a></h5>
                    <p>Located in Downtown Greeneville and ~16 min away from the venue.
                        We tried to block rooms and inquired if we could receive a guest discount for 30+ rooms.
                        However, they were not willing to work with us. We found Expedia
                        had much more affordable prices than what they were offering. <br/>
                        Sam also asked if he could view their rooms, but they did not allow him to view the room and did not have good customer service.
                        <br/>
                        However, one of our guests was given the discount code "3dweek" to get $100 off if you choose to stay here for three nights. 
                        <br/>
                        Also, if you would like a free bottle of champagne you can use code "romance". 

    
                    </p>

                    <img
                        alt=''
                        className='imageWidth'
                        src={generalMorgan}
                    />

                </div>

            </div>
        </div> // back ground end
    )

}
export default StayAndFlights;