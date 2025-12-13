import { useState } from "react";
import FlipCard from "../../flipCard/flipCard";

import './tenTrip.css'

import nashville from '../../pictures/Nashville.jpg'
import nooga from '../../pictures/nooga.jpg'
import Sevierville from '../../pictures/Seviervill.jpg'
import Gatlinburg from '../../pictures/Gatlinburg.jpg'
import home from '../../pictures/home.jpg'

function TenTrip({ onClose }) {
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
            <p>Knoxville, Pigeon Forge, and Gatlinburg are fairly close to each other so here are few things to do at each location.</p>
            {/* ===============================Knox============================================================== */}
            <h1>
                <a href="https://maps.app.goo.gl/HUqzGV284HxbzfqB6" target="_blank" rel="noreferrer"> Knoxville </a>
            </h1>
            <p>Knoxville has some of our favorite food. Eating at A Dopo Sourdough Pizza will place you closer to downtown.
                Some places to visit while in the downtown area are Fort Dickerson Park, Knoxville Museum of Art, McClung Museum of Natural History & Culture,
                University of Tennessee, or a nice family walk along the Tennessee River.

            </p>

            <p>
                Abridged Beer Company, is another favorite food place of ours. There are two locations, one which is a small outdoor brewery that does not have the full menu, but regardless they still serve really good appetizers and food. The bigger location is their restaurant that has
                their full beer and food menu.
            </p>

            <p>Knoxville Activities:</p>
            <ul className="greeneville-list">
                <li>Food:
                    <a href="https://maps.app.goo.gl/s4yew3KduS4iQF9e6" target="_blank" rel="noreferrer">
                        A Dopo Sourdough Pizza</a>
                </li>

                <li>Food and Brew:
                    <a href="https://maps.app.goo.gl/8NmxRUhew51iin6M6" target="_blank" rel="noreferrer">
                        Abridged Beer Company</a>
                </li>

                <li>Park:
                    <a href="https://maps.app.goo.gl/fNWcdaFLwaP1hYWn6" target="_blank" rel="noreferrer">
                        Fort Dickerson Park</a>
                </li>
                <li>Art:
                    <a href="https://maps.app.goo.gl/PjJ4sjMM6W5MeEgd9" target="_blank" rel="noreferrer">
                        Knoxville Museum of Art</a>
                </li>
            </ul>


            {/* ===============================Pigeon============================================================== */}
            <h1>
                <a href="https://maps.app.goo.gl/yZupZ9ZMGDwRCihQA" target="_blank" rel="noreferrer"> Pigeon Forg </a>
            </h1>
            <p>If you have kids or want to experience a southern theme park, Dolly Parton has her own Disneyland, Dollywood.
                The Island in Pigeon Forge, is a nice outdoor shopping center that has Ole Smoky Moonshine. Back in the day,
                they lined up every flavor and gave you a taster for free!

            </p>


            <p>Pigeon Forg Activities:</p>
            <ul className="greeneville-list">
                <li>Theme:
                    <a href="https://maps.app.goo.gl/TfZHLkpFtgxYpStH8" target="_blank" rel="noreferrer">
                        Dollywood</a>
                </li>

                <li>Shopping:
                    <a href="https://maps.app.goo.gl/a7BDE3761XNv7iai8" target="_blank" rel="noreferrer">
                        The Island in Pigeon Forge</a>
                </li>
            </ul>



            {/* ===================================Gatlinburg========================================================== */}
            <h1>
                <a href="https://maps.app.goo.gl/6whJVb5p9qfEiHDE9" target="_blank" rel="noreferrer"> Gatlinburg </a>
            </h1>
            <p>
                Gatlinburg by far has the most activities because it was built for tourism!
                Jelena describes the downtown strip as the "Las Vegas of the South".
                Driving through downtown Gatlinburg takes you straight into the Smoky Moutains National Park.
                When the land was given to the federal government to create the National Park, the only stipulation was that they 
                could never charge for entry to the park. Luckily, they have kept their word and the agreement is still being honored today! So come and enjoy this FREE entry National Park.
                By entering through Gatlinburg you will cross the section of the Smoky Mountains National Park where North Caralina and Tenessee boarders meet. 
         Which means you too can live out your "A Walk to Remember" dream of being in two places at once, like Jelena did in 2024.
            </p>


            <p>Gatlinburg Activities:</p>
            <ul className="greeneville-list">
                <li>Great Place to Start:
                    <a href="https://maps.app.goo.gl/6whJVb5p9qfEiHDE9" target="_blank" rel="noreferrer">
                        To Much To Do</a>
                </li>
            </ul>

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
            <p>This photo displays a portion of Sam's parents' property in Greeneville, Tennessee. We cannot wait for everyone to visit
                this cute little town! On December 23, 2024 Sam dropped to one knee and proposed to Jelena during "family Christmas photos" on this property so it's a very special place to us. During the Civil War Greeneville held both Union and Southern soldiers and
                as you can imagine is rich in American history. Andrew Johnson was the 17th President of the United States, who assumed office on April 15, 1865, following the assassination of Abraham Lincoln. Johnson, a War Democrat who ran as Lincoln's vice president on the National Union Party ticket in 1864, served until March 4, 1869. Andrew Johnson also happened to live in this town and you are able to tour his home. It's a very slow paced town and you will find
                time is now set to Tennessee time.
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
                    <p>Please click on the photos to read more details.</p>
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
                        Knoxville, Pigeon Forge, and Gatlinburg are all close to one another. </p>
                    <div className='member'>
                        <FlipCard
                            frontImage={Sevierville}
                            backInfo={sevier}
                        />
                    </div>

                    {/* <div className='member'>
                        <FlipCard
                            frontImage={Gatlinburg}
                            backInfo={gatlin}
                        />
                    </div> */}
                </div>

                {/*We have reach the Vull*/}
                <div className='tenTrip-info'>
                    <p>Aww, home sweet home! You have now reached what Tennesseans call Tennessee!</p>
                    <p>Never ending skies, Blue Ridge Mountains, warm summer nights, you have officially arrived to God's country.</p>
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