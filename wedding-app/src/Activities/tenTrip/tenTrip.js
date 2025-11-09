import { useState } from "react";
import FlipCard from "../../flipCard/flipCard";

import './tenTrip.css'

import nashville from '../../pictures/Nashville.jpg'
import nooga from '../../pictures/nooga.jpg'
import Sevierville from '../../pictures/Seviervill.jpg'
import Gatlinburg from '../../pictures/Gatlinburg.jpg'
import home from '../../pictures/home.jpg'

function TenTrip({onClose}) {
    const [close, setClose] = useState(false);

    const handleSetClose = () => {

        onClose();
        setClose(!close);
    }

    const theVull = (
        <div>
            <h1>Nashville</h1>
            <p>Nashville has so much to offer. Tons of museumes, food and a night life. 
                BNB are everywhere around the area. Taking a stroll around the city will leave you 
                stuned. 
            </p>
        </div>
    );

    const theNooga = (
        <div>
            <h1>Chattanooga</h1>
            <p>Chattanooga is the perfect mix of city and out doors. There are museums, great food, and so much lovely
                walking spots. The city due to flooding has been built on top of itself ovet the centeries. You are in a city
                surounded by the apalacha. Hikes are everywhere and food is plentyfull. I also plan to complete my first
                70.1 ironman here in May!! My lovely sister and her Husband live here and love it!! It's kind of like
                SF or Austin of the South... Stay weird!
            </p>
        </div>
    );

    const sevier = (
        <div>
            <h1>Sevierville</h1>
            <p>Sevierville is starting to get closser to home
            </p>
        </div>
    );

    const gatlin = (
        <div>
            <h1>Gatlinburg</h1>
            <p>Gatlinburg is starting to get closser to home
            </p>
        </div>
    );

    const homeDis = (
        <div>
            <h1>Greeneville</h1>
            <p>This is an picture is a section of my parent property in Greeneville TN. I can not wait foreveryone to visit 
                this little town. During the cival war Greeneville held both Union and Souther soldres and 
                as you can imagin made for a lot of history. Andrew Johnson 'The president that took over after Lincon'
                lived in this town and you are able to tour his home. Its very slow paced in this town, and you will find
                time is now set to Tennesee. 
            </p>
        </div>
    );

    return (
        // background
        <div className='tenTripBackground'>

            <div className='tenTrip-content'>
                
                {/* exit button  and close function*/}
                <button className='tenTrip-exit-button' onClick={() => handleSetClose()}>X</button>
                <div className="tenTrip-info">
                    <p>If you would like to make an adventure out of this trip here is what I would do...</p>
                    <p>(Click the pic's)</p>
                </div>
                
                {/* Nashville */}
                <div className='tenTrip-info'>
                    <p>Start with flying into Nashville the home of country music</p>
                    <div className='member'>
                        <FlipCard
                            frontImage={nashville}
                            backInfo={theVull}
                        />
                    </div>
                </div>

                {/*Chattanooga*/}
                <div className='tenTrip-info'>
                    <p>Stop by the Noog</p>
                    <div className='member'>
                        <FlipCard
                            frontImage={nooga}
                            backInfo={theNooga}
                        />
                    </div>
                </div>

                {/*Sevierville/Gatlinburg */}
                <div className='tenTrip-info'>
                    <p>Starting to get close to the destination.
                        Sevierville and Gatlinburg are close to each other </p>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sevierville}
                            backInfo={sevier}
                        />
                    </div>

                     <div className='member'>
                        <FlipCard
                            frontImage={Gatlinburg}
                            backInfo={gatlin}
                        />
                    </div>
                </div>

                {/*We have reach the Vull*/}
                <div className='tenTrip-info'>
                    <p>Aww, Home! You have now reach what Tenneseens call Tennesee!</p>
                    <p>Blue skies never ending days and Gods country</p>
                    <div className='member'>
                        <FlipCard
                            frontImage={home}
                            backInfo={homeDis}
                        />
                    </div>
                </div>

            </div>


        </div> // back ground end
    )

}

export default TenTrip;