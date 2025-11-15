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
            <p>Nashville has so much to offer. Tons of museums, amazing food, and wild night life. 
                Airbnbs are everywhere around the area. Taking a stroll around the city will leave you 
                stunned. 
            </p>
        </div>
    );

    const theNooga = (
        <div>
            <h1>Chattanooga</h1>
            <p>Chattanooga is the perfect mix of city  and outdoors. There are museums, great food, and so many lovely
                walking spots. The city due to flooding has been built on top of itself over the centeries. You are in a city
                surounded by the Appalachian Mountains. Hikes are abundant and food is plentiful. Fun Fact: Sam is planning to compete in his first
                70.1 Ironman here in May 2026! Also, Sam's lovely sister and her husband live here and love it! It's kind of like
                the SF or Austin of the South...Stay weird!
            </p>
        </div>
    );

    const sevier = (
        <div>
            <h1>Sevierville</h1>
            <p>Sevierville is starting to get closer to home.
            </p>
        </div>
    );

    const gatlin = (
        <div>
            <h1>Gatlinburg</h1>
            <p>Gatlinburg is starting to get closer to home.
            </p>
        </div>
    );

    const homeDis = (
        <div>
            <h1>Greeneville</h1>
            <p>This photo displays a portion of Sam's parents' property in Greeneville, TN. We cannot wait for everyone to visit 
                this cute little town! On December 23, 2024 Sam dropped on one knee and proposed to Jelena during "family Christmas photos" on this property so it's a very special place to us. During the Civil War Greeneville held both Union and Southern soldiers and 
                as you can imagine is rich in American history. Andrew Johnson was the 17th President of the United States, who assumed office on April 15, 1865, following the assassination of Abraham Lincoln. Johnson, a War Democrat who ran as Lincoln's vice president on the National Union Party ticket in 1864, served until March 4, 1869. Andrew Johnson also happened to live in this town and you are able to tour his home. It's a very slow paced town and you will find
                time is now set to Tennesee time. 
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
                    <p>If you would like to make an adventure out of this trip this is what we would do...</p>
                    <p>(Click on the photos for more details)</p>
                </div>
                
                {/* Nashville */}
                <div className='tenTrip-info'>
                    <p>Start with flying into Nashville, the home of country music.</p>
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
                    <p>Starting to get close to the wedding destination.
                        Sevierville and Gatlinburg are close to one another. </p>
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
                    <p>Aww, home sweet home! You have now reached what Tennesseans call Tennesee!</p>
                    <p>Blue skies, never ending days, and God's country.</p>
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