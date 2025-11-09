import { useState } from "react";
import FlipCard from "../../flipCard/flipCard";

import './greeneville.css'

import home from '../../pictures/downtownGreeneville.jpeg'
import jonesboroughPic from '../../pictures/Jonesborough_pic.jpg'
import johnsonCityPic from '../../pictures/johnsonCity.jpg'


function Greeneville({onClose}) {
    const [close, setClose] = useState(false);

    const handleSetClose = () => {
        onClose();
        setClose(!close);
    }


    const homeDis = (
        <div>
            <h1>Greeneville</h1>
            <p>This is an picture is a section of my parent property in 
                <a href="https://maps.app.goo.gl/dHgGf7foxLhirSdf6" target="_blank" rel="noreferrer"> Greeneville TN.</a> I can not wait foreveryone to visit 
                this little town. During the cival war Greeneville held both Union and Souther soldres and 
                as you can imagin made for a lot of history. Andrew Johnson 'The president that took over after Lincon'
                lived in this town and you are able to tour his home. Its very slow paced in this town, and you will find
                time is now set to Tennesee. 
            </p>

            <p>Few things to do in this small town:</p>
            <ul className="greeneville-list">
                <li>Hike: 
                    <a href="https://share.google/SFLojTdUZ1ktNO2b6" target="_blank" rel="noreferrer"> 
                    Margarette Falls Trail</a>
                    </li>
                <li>Explore: 
                    <a href="https://share.google/YRGi6kVPGrCSLb3jw" target="_blank" rel="noreferrer">
                    Andrew Johnson Homestead</a>
                    </li>
                <li>Brew: 
                    <a href="https://share.google/IAhAKkphQXrtVwAzV" target="_blank" rel="noreferrer">
                    The Gentry</a>
                    </li>
                <li>Brew and Food: 
                    <a href="https://share.google/AYhnxl5uPchNCdRBd" target="_blank" rel="noreferrer">
                    Rock City Tap & Lounge and Food Truck</a>
                </li>
                <li>Brew and Food: 
                    <a href="https://share.google/AYhnxl5uPchNCdRBd" target="_blank" rel="noreferrer">
                    Old Oak Taproom</a>
                </li>
                <li>food: <a href="https://share.google/H7NbI2m4xSC1xBE3g" target="_blank" rel="noreferrer">
                Thai's Joy</a>
                </li>
            </ul>
        </div>
    );

     const jonesborough = (
        <div>
            <h1>Jonesborough</h1>
            <p><a href="https://maps.app.goo.gl/rs3MnvpaBb3yJpxQ7" target="_blank" rel="noreferrer">Jonesborough</a> is a cute little town with some good Coffee and Ice cream. They have cute downtwon with cute stores.
                Tennesee Hills, a distillary that has gorown over the years, is located in this town and is one of my favorites.
                If you happen to be sitting at the bar when a train goes by, $1 shots is comming your way. From here head to 
                Johnson City for some good food and events. Make sure you make a pit stop at Troyer's Mountain View Country Market/
                Auntie Ruth's Doughnuts & Pretzels for a good little snack, its right off the hwy.
            </p>
             <p>Few things to do in this small town:</p>
            <ul className="greeneville-list">
                <li>Coffee/Ice cream:
                    <a href="https://share.google/ZFCJouHFQCfGvsDWe" target="_blank" rel="noreferrer"> 
                     Neuma Coffee</a>
                    </li>
                <li>Distillery:
                    <a href="https://share.google/eotuaJX4A6oYLGxK1" target="_blank" rel="noreferrer">
                     Tennessee Hills Distillery</a>
                    </li>
                <li>food:
                    <a href="https://share.google/Z7kV1HfkC7ktzB4dU" target="_blank" rel="noreferrer">
                     Troyer's Mountain View Country Market</a>
                    </li>
                <li>food:
                    <a href="https://share.google/851YcS4H1y2E3Hi3Q" target="_blank" rel="noreferrer">
                     Auntie Ruth's Doughnuts & Pretzels</a>
                </li>
            </ul>
        </div>
    );

     const johnsonCity = (
        <div>
            <h1>Johnson City</h1>
            <p>Walking to the south out of Roanoke caught a trucker out of Philly, had a nice long toke
            But he's a-headed west from the Cumberland gap To 
            <a href="https://maps.app.goo.gl/aDvkhENbj1FwkyQ98" target="_blank" rel="noreferrer"> Johnson City, Tennessee </a>  - Darius Rucker.</p>

            <p>This is the biggest of the small towns. You will find a night life, food, coffee, sports bar and drinks. In August the town usually will have a concert
            in the park. Tennessee Hills has their Brewstillery here where they serve beer and the good stuff. So head down to JC and, Rock me, mama, like a wagon wheel
             Rock me, mama, any way you feel!!
            </p>

            <p>Few things to do in this big small town:</p>
            <ul className="greeneville-list">
                <li>Coffee and Tacos... Whaaat:
                    <a href="https://share.google/dPbiNmQ2eSk4d3FHb" target="_blank" rel="noreferrer"> 
                     Fearless Coffee & Kitchen</a>
                    </li>
                <li>Brewstillery:
                    <a href="https://share.google/MxTKXQVLEEokFwfmm" target="_blank" rel="noreferrer">
                     Tennessee Hills Brewstillery</a>
                    </li>
                <li>Brew:
                    <a href="https://share.google/FWcOYmix24DWH3SrL" target="_blank" rel="noreferrer">
                     Yee-Haw Brewing Company</a>
                    </li>
                <li>food:
                    <a href="https://share.google/GBxoieAWw6DKckTSA" target="_blank" rel="noreferrer">
                     White Duck Taco Shop</a>
                </li>
            </ul>
        </div>
    );

    return (
        // background
        <div className='greenevilleBackground'>

            <div className='greeneville-content'>
                
                {/* exit button  and close function*/}
                <button className='greeneville-exit-button' onClick={() => handleSetClose()}>X</button>
                <div className="greeneville-info">
                    <p>Tell them about the Vull</p>
                    <p>(Click the pic's)</p>
                </div>

                {/*We have reach the Vull*/}
                <div className='greeneville-info'>
                    <p>Greeneville Things</p>

                    <div className='member'>
                        <FlipCard
                            frontImage={home}
                            backInfo={homeDis}
                        />
                    </div>
                </div>

                 {/*Jonesborough*/}
                <div className='greeneville-info'>
                    <p>Jonesborough Things (~30 min from Greeneville)</p>
                    <div className='member'>
                        <FlipCard
                            frontImage={jonesboroughPic}
                            backInfo={jonesborough}
                        />
                    </div>
                </div>

                 {/*Johnson city*/}
                <div className='greeneville-info'>
                    <p>Johnson City Things (~20 min from Jonesborough)</p>
    
                    <div className='member'>
                        <FlipCard
                            frontImage={johnsonCityPic}
                            backInfo={johnsonCity}
                        />
                    </div>
                </div>

            </div>
        </div> // back ground end
    )

}

export default Greeneville;