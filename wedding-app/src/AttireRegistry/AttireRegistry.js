import './AttireRegistry.css';
import { useState } from 'react';
import color1 from '../pictures/color1.jpg'
import color2 from '../pictures/color2.jpg'
import venmmo from '../pictures/venmo.jpg'

function AttireRegistry({ onClose }) {

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

                <div className='placesToStay'>
                    <h3>Per the Bride:</h3>    
                    <p>
                        Please dress in warm earth tones, formal attire. 
                        Reference the color palette provided below and ensure your attire is one of the colors on this website display. Men, please either wear black suits or any suit within the color palette or nice linen pants with a button up shirt. Ladies, please wear a dress, skirt, or pantsuit within the color palette. Any type of fabric permitted including linen and cotton dresses. 
                    </p>

                    <img
                        alt=''
                        className='imageWidth'
                        src={color1}
                    />

                    <img
                        alt=''
                        className='imageWidth'
                        src={color2}
                    />

                    <h3>Per the Groom:</h3>
                    <p> Please listen to the bride, she is VERY serious about the wedding dress code!</p>
                </div>


                                <div className='placesToStay'>
                    {/* Main header */}
                    {/* <h1>Places to Stay</h1>
                    <p>If you are traveling as a family, we found that Airbnb and Vrbo are both great resources to find
                        large houses and appear to be more affordable for families!
                    </p> */}
                    <h3>Registry:</h3>    
                    <p>
                        Your presence at our wedding is our greatest gift, but should you wish to contribute, a donation to our Costa Rica honeymoon fund is greatly appreciated.
                    </p>

                    <p>If you are unable to make it to our wedding and would like to send us a card please let us know and we will provide our mailing address via text message. We love receiving hand-written cards from our loved ones!</p>

                    <img
                        alt=''
                        className='imageWidth'
                        src={venmmo}
                    />
                </div>

            </div>
        </div> // back ground end
    )

}
export default AttireRegistry;